import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Accommodations from "@/components/Accommodations";
import Amenities from "@/components/Amenities";
import Booking from "@/components/Booking";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Experience />
      <Accommodations />
      <Amenities />
      <Booking />
      <Location />
      <Footer />
    </main>
  );
};

export default Index;
