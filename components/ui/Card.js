import React from 'react'
import { cn } from '../../lib/cn'

export function Card({ children, className, ...props }){
  return (
    <div className={cn('rounded-lg border bg-white shadow-sm', className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className }){
  return <div className={cn('px-4 py-3 border-b', className)}>{children}</div>
}

export function CardTitle({ children, className }){
  return <h3 className={cn('text-lg font-semibold', className)}>{children}</h3>
}

export function CardContent({ children, className }){
  return <div className={cn('p-4', className)}>{children}</div>
}

export function CardFooter({ children, className }){
  return <div className={cn('px-4 py-3 border-t text-sm text-gray-600', className)}>{children}</div>
}

export default Card
