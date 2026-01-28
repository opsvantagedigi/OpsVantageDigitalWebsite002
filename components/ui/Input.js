import React from 'react'
import { cn } from '../../lib/cn'

export default function Input({ label, id, description, error, className, ...props }){
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label && <label htmlFor={id} className="text-sm font-semibold text-gray-700">{label}</label>}
      <input
        id={id}
        className={cn('rounded-md border px-3 py-2 text-sm transition-shadow focus:ring-2 focus:ring-offset-1', error ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-primary')}
        {...props}
      />
      {description && <p className="text-xs text-gray-500">{description}</p>}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}
