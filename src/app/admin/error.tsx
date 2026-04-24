
'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Admin Error:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Admin Panel Error
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        {error.message || 'An error occurred in the admin section.'}
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-primary text-white rounded hover:bg-accent transition-colors"
        >
          Try again
        </button>
        <Link
          href="/admin"
          className="px-6 py-2 border rounded hover:bg-gray-50 transition-colors"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  )
}
