import WhoWeAreSection from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import { Header } from "./components/Header";
import HeroSection from "./components/Herosection";
import Products from "./components/Products";
import Services from "./components/Services";
import TestimonialsScroll from "./components/Testimonials";
import UpdatesSection from "./components/Updates";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
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
      </main>
    </div>
  )
}

