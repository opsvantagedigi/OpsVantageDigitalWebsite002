import React from 'react'
import { cn } from '../../lib/cn'

export default function Button({ children, className, variant = 'primary', ...props }){
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants = {
    primary: 'bg-primary text-white hover:brightness-95 px-4 py-2',
    ghost: 'bg-transparent text-primary px-3 py-2',
    outline: 'bg-transparent border border-primary text-primary px-3 py-2'
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
