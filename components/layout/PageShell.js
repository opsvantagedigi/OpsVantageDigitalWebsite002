import React from 'react'
import { cn } from '../../lib/cn'

export default function PageShell({ title, subtitle, children, className }){
  return (
    <div className={cn('container mx-auto px-6 py-12', className)}>
      {title && <header className="mb-6">
        <h1 className="text-3xl font-extrabold">{title}</h1>
        {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
      </header>}

      <div className="space-y-6">{children}</div>
    </div>
  )
}
