import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { prisma } from '@/lib/prisma';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = async ({ children }: MainLayoutProps) => {
  let logoUrl = '/primary2.png';
  try {
    const settings = await prisma.siteSettings.findFirst({ where: { id: 1 } });
    if (settings?.logoUrl) {
      logoUrl = settings.logoUrl;
    }
  } catch (error) {
    console.error('Failed to fetch site settings in MainLayout:', error);
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header logoUrl={logoUrl} />
      <main className="flex-grow container mx-auto px-4 py-4">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
