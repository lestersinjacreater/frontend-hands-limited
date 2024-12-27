import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { Updates } from './components/Updates';
import { Testimonials } from './components/Testimonials';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Products title="PRODUCTS" />
        <Services title="SERVICES" />
        <Updates title="Updates" />
        <Testimonials title="What Our Clients Say About Us" />
        <WhyChooseUs title="Why Choose Us?" />
        <AboutUs title="Who We Are" />
        <ContactForm title="Contact Us" />
      </main>
      <Footer />
    </div>
  );
}

