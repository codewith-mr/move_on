import StaticMainLayout from '@/components/layout/StaticMainLayout';
import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <StaticMainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Hero/Header Skeleton */}
          <Skeleton className="h-64 w-full rounded-xl" />
          
          {/* Content Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="h-64 w-full rounded-xl md:col-span-2" />
            <Skeleton className="h-64 w-full rounded-xl" />
          </div>
          
          {/* List Skeleton */}
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-32 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </StaticMainLayout>
  );
}
