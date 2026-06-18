import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import About from "@/components/sections/About";

const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />

      <main className="relative z-10 pt-24 pb-12">
        <div className="relative">
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default AboutPage;
