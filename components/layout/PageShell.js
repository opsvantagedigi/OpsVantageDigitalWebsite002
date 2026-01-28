import React from 'react'
import { cn } from '../../lib/cn'

export default function PageShell({ title, subtitle, children, className }){
  return (
    <div className={cn('container py-12', className)}>
      {title && <header className="mb-8">
        <h1 className="text-3xl font-extrabold orbitron-heading">{title}</h1>
        {subtitle && <p className="mt-3 text-sm text-muted-2">{subtitle}</p>}
      </header>}

      <main className="space-y-6">{children}</main>
    </div>
  )
}
