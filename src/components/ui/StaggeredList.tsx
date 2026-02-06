'use client';

import { Children, ReactNode } from 'react';

interface StaggeredListProps {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
}

export default function StaggeredList({ children, className = "", itemClassName = "h-full" }: StaggeredListProps) {
  return (
    <div className={className}>
      {Children.map(children, (child) => (
        <div className={itemClassName}>
          {child}
        </div>
      ))}
    </div>
  );
}
