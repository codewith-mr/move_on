'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin/login'

  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
         <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
            {children}
         </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <div className="flex gap-3 mb-6 flex-wrap">
          <Link href="/admin" className="px-3 py-1 border rounded bg-white hover:bg-gray-50 transition-colors">Dashboard</Link>
          <Link href="/admin/home" className="px-3 py-1 border rounded bg-white hover:bg-gray-50 transition-colors">Home</Link>
          <Link href="/admin/hubs/global-scholar" className="px-3 py-1 border rounded bg-white hover:bg-gray-50 transition-colors">Global Scholar</Link>
          <Link href="/admin/hubs/earn-careers" className="px-3 py-1 border rounded bg-white hover:bg-gray-50 transition-colors">Earn & Careers</Link>
          <Link href="/admin/hubs/self-development" className="px-3 py-1 border rounded bg-white hover:bg-gray-50 transition-colors">Self Development</Link>
          <Link href="/admin/hubs/resources" className="px-3 py-1 border rounded bg-white hover:bg-gray-50 transition-colors">Resources Hub</Link>
          <Link href="/admin/hubs/opportunities" className="px-3 py-1 border rounded bg-white hover:bg-gray-50 transition-colors">Opportunities</Link>
          <Link href="/admin/hubs/gov-schemes" className="px-3 py-1 border rounded bg-white hover:bg-gray-50 transition-colors">Gov Portal</Link>
          <Link href="/admin/courses" className="px-3 py-1 border rounded bg-white hover:bg-gray-50 transition-colors">Courses</Link>
          <Link href="/admin/classes" className="px-3 py-1 border rounded bg-white hover:bg-gray-50 transition-colors">Classes</Link>
          <Link href="/admin/blogs" className="px-3 py-1 border rounded bg-white hover:bg-gray-50 transition-colors">Blogs</Link>
          <Link href="/admin/tips" className="px-3 py-1 border rounded bg-white hover:bg-gray-50 transition-colors">Tips</Link>
          <Link href="/admin/settings" className="px-3 py-1 border rounded bg-white hover:bg-gray-50 transition-colors">Settings</Link>
          <Link href="/admin/logout" className="px-3 py-1 border rounded text-red-600 bg-white hover:bg-red-50 transition-colors">Logout</Link>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg shadow-sm p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
