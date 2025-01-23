import WhoWeAreSection from "../components/AboutUs";
import ContactForm from "../components/ContactForm";
import { Header } from "../components/Header";
import HeroSection from "./Herosection";
import Products from "../components/Products";
import Services from "../components/Services";
import TestimonialsScroll from "../components/Testimonials";
import UpdatesSection from "../components/Updates";
import Footer from "../components/Footer";

export default function LandingPage({isAuthenticated}: {isAuthenticated: boolean}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={true} />
      <main>
        <section id="home"><HeroSection /></section>
        <section id="products"><Products /></section>
        <section id="services"><Services /></section>
        <section id="testimonials"><TestimonialsScroll /></section>
        <section id="updates"><UpdatesSection /></section>
        <section id="about"><WhoWeAreSection /></section>
        <section id="contact"><ContactForm /></section>
        <section id="footer"><Footer/></section>
      </main>
    </div>
  );
}