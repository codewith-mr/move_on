
'use client'

import { useEffect } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import StaticMainLayout from '@/components/layout/StaticMainLayout'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Root Error:', error)
  }, [error])

  return (
    <StaticMainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-4xl font-heading font-bold text-red-600 mb-4">
          Something went wrong!
        </h1>
        <p className="text-gray-600 mb-8 max-w-md">
          {error.message || 'An unexpected error occurred while rendering this page.'}
        </p>
        {error.digest && (
          <p className="text-xs text-gray-400 mb-8">
            Error ID: {error.digest}
          </p>
        )}
        <button
          onClick={() => reset()}
          className="px-8 py-3 bg-primary text-white rounded-md hover:bg-accent transition-colors font-semibold shadow-lg hover:shadow-xl"
        >
          Try again
        </button>
      </div>
    </StaticMainLayout>
  )
}
