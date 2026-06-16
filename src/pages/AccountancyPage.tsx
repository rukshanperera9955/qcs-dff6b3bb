import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ImageSlider from "@/components/ImageSlider";
import AccountancyServices from "@/components/sections/AccountancyServices";

const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const AccountancyPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Header />

      <main className="relative z-10">
        {/* Full-width slider below fixed header */}
        <div className="pt-[64px]">
          <ImageSlider />
        </div>

        {/* Content */}
        <div className="relative">
          <Suspense fallback={<SectionLoader />}>
            <AccountancyServices />
          </Suspense>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default AccountancyPage;
