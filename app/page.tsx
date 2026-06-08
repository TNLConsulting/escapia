import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Accommodations } from "@/components/Accommodations";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Experience />
      <Accommodations />
      <Location />
      <Footer />
    </main>
  );
}
