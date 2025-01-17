import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import { Header } from './components/Header'
import Footer from './components/Footer'
import Landingpage from './components/Landingpage'
import HeroSection from './components/Herosection'
import Products from './components/Products'
import TestimonialsScroll from './components/Testimonials'
import UpdatesSection from './components/Updates'
import WhoWeAreSection from './components/AboutUs'
import ContactForm from './components/ContactForm'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import AdminLogModal from './components/adminlogmodal'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="testimonials" element={<TestimonialsScroll />} />
          <Route path="updates" element={<UpdatesSection />} />
          <Route path="about" element={<WhoWeAreSection />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="why-choose-us" element={<WhyChooseUs />} />
          <Route path="/AdminLogModal" element={<AdminLogModal isOpen={true} onClose={() => {}} />} />
          <Route path="Footer" element={<Footer />} />
        </Routes>
      </main>
    </div>
  )
}