import { Header } from './components/Header';

import { Footer } from './components/Footer';
import HeroSection from './components/Herosection';
import Products from './components/Products';
import TestimonialsScroll from './components/Testimonials';
import UpdatesSection from './components/Updates';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <Products />
        {/* <Services title="SERVICES" /> */}
        {/* <Updates title="Updates" /> */}
        <TestimonialsScroll />
        <UpdatesSection />
        {/* <WhyChooseUs title="Why Choose Us?" /> */}
        {/* <AboutUs title="Who We Are" /> */}
        {/* <ContactForm title="Contact Us" /> */}
      </main>
      <Footer />
    </div>
  );
}

