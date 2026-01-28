import React from 'react'
import Link from 'next/link'
import { cn } from '../../lib/cn'

export function NavigationMenu({ children, className }){
  return (
    <nav className={cn('flex items-center gap-4', className)} aria-label="Main navigation" role="navigation">
      {children}
    </nav>
  )
}

export function NavigationMenuItem({ href, children, className }){
  return (
    <Link href={href} className={cn('text-sm font-medium text-muted-2 hover:text-white px-2 py-1', className)}>
      {children}
    </Link>
  )
}

export function NavigationMenuDropdown({ label, children, className }){
  return (
    <details className={cn('relative', className)}>
      <summary className="cursor-pointer list-none text-sm font-medium text-muted-2 px-2 py-1" aria-haspopup="true">{label}</summary>
      <div className="absolute z-20 mt-2 w-48 rounded-md border bg-[var(--marz)] shadow-lg" role="menu" aria-label={label}>
        <div className="flex flex-col p-2">{children}</div>
      </div>
    </details>
  )
}

export default NavigationMenu
