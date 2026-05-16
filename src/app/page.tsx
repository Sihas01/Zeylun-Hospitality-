import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ChaosSection } from "@/components/sections/ChaosSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { GuestAcquisitionSection } from "@/components/sections/GuestAcquisitionSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HospitalityMotionSection } from "@/components/sections/HospitalityMotionSection";
import { OperationalLayerSection } from "@/components/sections/OperationalLayerSection";
import { PackagesSection } from "@/components/sections/PackagesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <GuestAcquisitionSection />
        <ChaosSection />
        <OperationalLayerSection />
        <HospitalityMotionSection />
        <PackagesSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
