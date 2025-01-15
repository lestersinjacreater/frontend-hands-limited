import { Header } from './components/Header';
import { Hero } from './components/Hero';
// import { Products } from './components/Products';
import { Services } from './components/Services';
import { Updates } from './components/Updates';
import TestimonialsSection, { Testimonials } from './components/Testimonials';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import HeroSection from './components/Herosection';
import Products from './components/Products';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <Products />
        {/* <Services title="SERVICES" /> */}
        {/* <Updates title="Updates" /> */}
        <TestimonialsSection />
        {/* <WhyChooseUs title="Why Choose Us?" /> */}
        {/* <AboutUs title="Who We Are" /> */}
        {/* <ContactForm title="Contact Us" /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

