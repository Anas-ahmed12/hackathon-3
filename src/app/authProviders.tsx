'use client'

import { SessionProvider } from "next-auth/react"
import { useEffect } from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  // Add error handling for development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const handleError = (error: ErrorEvent) => {
        if (error.message.includes('NextAuth')) {
          console.error('NextAuth Error:', error)
        }
      }
      window.addEventListener('error', handleError)
      return () => window.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

