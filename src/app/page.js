import Hero from "@/app/sections/hero/Hero";
import ServicesSection from "./sections/services/Services";
import BookTrip from "./sections/book-trip/BookTrip";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />

      <BookTrip />
    </div>
  );
}
