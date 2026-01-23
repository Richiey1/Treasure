// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title SheBuilds - Proof-of-Skill NFT Platform
 * @notice NFT credentials for women builders representing skills, projects, and mentorship
 * @dev Implements ERC721 with role-based minting and optional soulbound functionality
 */
contract SheBuilds is ERC721, ERC721URIStorage, AccessControl {
    using Counters for Counters.Counter;

    // Roles
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant ISSUER_ROLE = keccak256("ISSUER_ROLE");
    bytes32 public constant MENTOR_ROLE = keccak256("MENTOR_ROLE");

    // NFT Types
    enum CredentialType {
        SKILL,
        PROJECT,
        MENTORSHIP
    }

    // Structs
    struct Credential {
        uint256 tokenId;
        CredentialType credentialType;
        address recipient;
        address issuer;
        string title;
        string description;
        uint256 issuedDate;
        bool isSoulbound;
    }

    // State variables
    Counters.Counter private _tokenIdCounter;
    mapping(uint256 => Credential) public credentials;
    mapping(uint256 => bool) public soulboundTokens;
    mapping(address => uint256[]) public userCredentials;
    
    // Skill tracking
    mapping(address => mapping(string => bool)) public userSkills; // user => skill => has skill
    mapping(address => string[]) public userSkillList;

    // Events
    event CredentialMinted(
        uint256 indexed tokenId,
        address indexed recipient,
        CredentialType credentialType,
        string title,
        bool isSoulbound
    );
    event SkillAdded(address indexed user, string skill);

    constructor() ERC721("SheBuilds Credentials", "SHEBUILDS") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(ISSUER_ROLE, msg.sender);
    }

    // Modifiers
    modifier onlyIssuerOrAdmin() {
        require(
            hasRole(ISSUER_ROLE, msg.sender) || hasRole(ADMIN_ROLE, msg.sender),
            "Caller is not an issuer or admin"
        );
        _;
    }

    /**
     * @notice Mint a new credential NFT
     * @param recipient Address to receive the NFT
     * @param credentialType Type of credential (Skill, Project, Mentorship)
     * @param title Title of the credential
     * @param description Description of the achievement
     * @param tokenURI IPFS URI for metadata
     * @param isSoulbound Whether the token is non-transferable
     */
    function mintCredential(
        address recipient,
        CredentialType credentialType,
        string memory title,
        string memory description,
        string memory tokenURI,
        bool isSoulbound
    ) external onlyIssuerOrAdmin returns (uint256) {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();

        _safeMint(recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);

        credentials[tokenId] = Credential({
            tokenId: tokenId,
            credentialType: credentialType,
            recipient: recipient,
            issuer: msg.sender,
            title: title,
            description: description,
            issuedDate: block.timestamp,
            isSoulbound: isSoulbound
        });

        if (isSoulbound) {
            soulboundTokens[tokenId] = true;
        }

        userCredentials[recipient].push(tokenId);

        emit CredentialMinted(tokenId, recipient, credentialType, title, isSoulbound);
        return tokenId;
    }

    /**
     * @notice Mint a skill credential and track the skill
     * @param recipient Address to receive the NFT
     * @param skillName Name of the skill
     * @param description Description of the skill achievement
     * @param tokenURI IPFS URI for metadata
     * @param isSoulbound Whether the token is non-transferable
     */
    function mintSkillCredential(
        address recipient,
        string memory skillName,
        string memory description,
        string memory tokenURI,
        bool isSoulbound
    ) external onlyIssuerOrAdmin returns (uint256) {
        uint256 tokenId = this.mintCredential(
            recipient,
            CredentialType.SKILL,
            skillName,
            description,
            tokenURI,
            isSoulbound
        );

        // Track the skill
        if (!userSkills[recipient][skillName]) {
            userSkills[recipient][skillName] = true;
            userSkillList[recipient].push(skillName);
            emit SkillAdded(recipient, skillName);
        }

        return tokenId;
    }

    /**
     * @notice Batch mint credentials to multiple recipients
     * @param recipients Array of recipient addresses
     * @param credentialType Type of credential
     * @param titles Array of titles
     * @param descriptions Array of descriptions
     * @param tokenURIs Array of IPFS URIs
     * @param isSoulbound Whether tokens are non-transferable
     */
    function batchMintCredentials(
        address[] memory recipients,
        CredentialType credentialType,
        string[] memory titles,
        string[] memory descriptions,
        string[] memory tokenURIs,
        bool isSoulbound
    ) external onlyIssuerOrAdmin {
        require(
            recipients.length == titles.length &&
            titles.length == descriptions.length &&
            descriptions.length == tokenURIs.length,
            "Array lengths must match"
        );

        for (uint256 i = 0; i < recipients.length; i++) {
            this.mintCredential(
                recipients[i],
                credentialType,
                titles[i],
                descriptions[i],
                tokenURIs[i],
                isSoulbound
            );
        }
    }

    // View functions
    function getUserCredentials(address user) external view returns (uint256[] memory) {
        return userCredentials[user];
    }

    function getUserSkills(address user) external view returns (string[] memory) {
        return userSkillList[user];
    }

    function hasSkill(address user, string memory skill) external view returns (bool) {
        return userSkills[user][skill];
    }

    function getCredential(uint256 tokenId) external view returns (Credential memory) {
        require(_exists(tokenId), "Token does not exist");
        return credentials[tokenId];
    }

    function totalSupply() external view returns (uint256) {
        return _tokenIdCounter.current();
    }

    // Override transfer functions to prevent soulbound token transfers
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
        
        // Allow minting (from == address(0)) and burning (to == address(0))
        if (from != address(0) && to != address(0)) {
            require(!soulboundTokens[tokenId], "Soulbound token cannot be transferred");
        }
    }

    // Required overrides
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _exists(uint256 tokenId) internal view returns (bool) {
        return _ownerOf(tokenId) != address(0);
    }
}
