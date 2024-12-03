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
    <div className="2xl:pl-40 lg:pl-32 md:pl-20">
      <Hero />
      <div className="2xl:pr-40 lg:pr-32 md:pr-20">
        <ServicesSection />
        <Destinations />
        </div>
        <div className="lg:pr-0 md:pr-20">
        <BookTrip />
        </div>
        <div className="2xl:pr-40 lg:pr-32 md:pr-20">
        <Testimonials />
        <BrandLogos />
        </div>
        <SubscribeSection />
        <Footer />
     
    </div>
  );
}
