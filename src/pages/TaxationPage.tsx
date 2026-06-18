import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ImageSlider from "@/components/ImageSlider";
import TaxationServices from "@/components/sections/TaxationServices";

const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const TaxationPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />

      <main className="relative z-10">
        {/* Full-width slider below fixed header */}
        <div className="pt-[64px]">
          <ImageSlider />
        </div>

        {/* Content */}
        <div className="relative">
          <Suspense fallback={<SectionLoader />}>
            <TaxationServices />
          </Suspense>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default TaxationPage;
