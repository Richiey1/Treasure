'use client'

import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div className={`
      bg-slate-900/50 border border-slate-800 rounded-[2rem] overflow-hidden
      ${hover ? 'hover:border-mint/30 hover:bg-slate-900 transition-all cursor-default' : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <div className={`p-6 border-b border-slate-800 ${className}`}>{children}</div>
}

export function CardContent({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <div className={`p-6 border-t border-slate-800 bg-black/20 ${className}`}>{children}</div>
}
