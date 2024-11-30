import Hero from "@/app/sections/hero/Hero";
import ServicesSection from "./sections/services/Services";
import BookTrip from "./sections/book-trip/BookTrip";
import Destinations from "./sections/destinations/Destinations";
import Testimonials from "./sections/testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <Destinations />
      <BookTrip />
      <Testimonials />
    </div>
  );
}
