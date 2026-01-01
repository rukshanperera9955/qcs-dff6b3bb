import { lazy, Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';

// Lazy load below-the-fold sections for better performance
const ServicesOverview = lazy(() => import('@/components/sections/ServicesOverview'));
const SecretarialServices = lazy(() => import('@/components/sections/SecretarialServices'));
const TaxationServices = lazy(() => import('@/components/sections/TaxationServices'));
const AccountancyServices = lazy(() => import('@/components/sections/AccountancyServices'));
const Contact = lazy(() => import('@/components/sections/Contact'));

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        
        <Suspense fallback={<SectionLoader />}>
          <ServicesOverview />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <SecretarialServices />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <TaxationServices />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <AccountancyServices />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
