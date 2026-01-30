import { ReactNode } from 'react';
import Header from './Header';
import StaticFooter from './StaticFooter';

interface StaticMainLayoutProps {
  children: ReactNode;
}

const StaticMainLayout = ({ children }: StaticMainLayoutProps) => {
  // Use default logo URL
  const logoUrl = '/primary2.png';
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header logoUrl={logoUrl} />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <StaticFooter />
    </div>
  );
};

export default StaticMainLayout;
