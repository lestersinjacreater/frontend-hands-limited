import { Header } from './Header';
import Footer from './Footer';
import HeroSection from './Herosection';
import Products from './Products';
import TestimonialsScroll from './Testimonials';
import UpdatesSection from './Updates';
import WhoWeAreSection from './AboutUs';
import ContactForm from './ContactForm';
import WhyChooseUs from './WhyChooseUs';
import Services from './Services';

export default function Landingpage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <Products />
        <Services />
        <TestimonialsScroll />
        <UpdatesSection />
        < WhyChooseUs />
        <WhoWeAreSection />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}
