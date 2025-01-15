import { Header } from './components/Header';

// import { Footer } from './components/Footer';
import HeroSection from './components/Herosection';
import Products from './components/Products';
import TestimonialsScroll from './components/Testimonials';
import UpdatesSection from './components/Updates';
import WhoWeAreSection from './components/AboutUs';
import ContactForm from './components/ContactForm';
import WhyChooseUs from './components/WhyChooseUs';

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
        < WhyChooseUs />
        <WhoWeAreSection />
        <ContactForm />
      </main>
    </div>
  );
}

