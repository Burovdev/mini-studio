import { FormSection } from "@/components/form-section";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="mt-16 mx-6 flex rounded-2xl shadow-md">
      <FormSection />
      <HeroSection />
    </main>
  );
}
