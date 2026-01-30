import StaticMainLayout from '@/components/layout/StaticMainLayout';
import { Skeleton } from "@/components/ui/Skeleton"

export default function Loading() {
  return (
    <StaticMainLayout>
      <div className="container mx-auto px-4 py-8">
      {/* Search and Filter Skeleton */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <Skeleton className="h-10 w-full md:w-1/3" />
        <Skeleton className="h-10 w-full md:w-1/4" />
      </div>

      {/* Course Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
            <div className="flex justify-between items-center mt-4">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-8 w-20" />
            </div>
          </div>
        ))}
      </div>
      </div>
    </StaticMainLayout>
  )
}
