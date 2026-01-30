import MainLayout from '@/components/layout/MainLayout';
import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header Skeleton */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16 -mx-4 mb-8 rounded-lg">
          <div className="container mx-auto px-4 text-center">
            <Skeleton className="h-12 w-64 mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          </div>
        </div>

        {/* Filter Skeleton */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-32 rounded-full" />
          ))}
        </div>

        {/* Tools Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm h-full flex flex-col border border-neutral-200">
              <Skeleton className="h-40 w-full" />
              <div className="p-6 flex flex-col flex-grow gap-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-16 w-full" />
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <Skeleton className="h-10 w-28 rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
