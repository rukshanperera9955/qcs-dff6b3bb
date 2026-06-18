import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Lazy load below-the-fold sections for better performance
const ServicesOverview = lazy(
  () => import("@/components/sections/ServicesOverview")
);


const Contact = lazy(() => import("@/components/sections/Contact"));

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const offsetTop =
            element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background relative">
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
            <Contact />
          </Suspense>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
