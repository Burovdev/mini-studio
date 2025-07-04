import { FormSection } from "@/components/form-section";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main
      className="mt-16 mx-6 flex rounded-2xl"
      style={{
        boxShadow: `
          0px 2px 4px -1px #0000000F,
          0px 4px 6px -1px #3E3ED866
      `,
      }}
    >
      <FormSection />
      <HeroSection />
    </main>
  );
}
