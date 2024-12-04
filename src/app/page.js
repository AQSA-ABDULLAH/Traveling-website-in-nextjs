import Hero from "@/app/sections/hero/Hero";
import ServicesSection from "./sections/services/Services";
import BookTrip from "./sections/book-trip/BookTrip";
import Destinations from "./sections/destinations/Destinations";
import Testimonials from "./sections/testimonials/Testimonials";
import BrandLogos from "./sections/brand-logo/BrandLogo";
import SubscribeSection from "./sections/subscribe-section/SubscribeSection";
import Footer from "./sections/footer/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="2xl:pl-40 lg:pl-32 pl-6">
        <Hero />
        <div className="2xl:pr-40 lg:pr-32 sm:pr-6">
          <ServicesSection />
          <Destinations />
        </div>
        <div className="lg:pr-0 pr-6">
          <BookTrip />
        </div>
        <div className="2xl:pr-40 lg:pr-32 pr-6">
          <Testimonials />
          <BrandLogos />
          <SubscribeSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}

