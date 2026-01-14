import { lazy, Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ParticleBackground from "@/components/ParticleBackground";

// Lazy load below-the-fold sections for better performance
const ServicesOverview = lazy(
  () => import("@/components/sections/ServicesOverview")
);
const SecretarialServices = lazy(
  () => import("@/components/sections/SecretarialServices")
);
const TaxationServices = lazy(
  () => import("@/components/sections/TaxationServices")
);
const AccountancyServices = lazy(
  () => import("@/components/sections/AccountancyServices")
);
const Contact = lazy(() => import("@/components/sections/Contact"));

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Attractive Navy Blue Background Overlay */}
      {/* <div className="fixed inset-0 bg-primary/[0.01] pointer-events-none z-0" /> */}

      <ParticleBackground />
      <Header />

      <main className="relative z-10">
        <Hero />

        {/* Sections with transparent navy dividers */}
        <div className="relative">
          {/* Subtle decorative background layer */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-primary/[0.03] pointer-events-none" />

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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
