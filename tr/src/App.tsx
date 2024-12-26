import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from './components/Section';

const App: React.FC = () => (
  <>
    <Header />
    <Navbar />
    <Section id="home" title="Empowering Lives with Quality Supplies" bgColor="#f5f5f5" />
    <Section id="products" title="Our Products" bgColor="#eef" />
    <Section id="services" title="Our Services" bgColor="#e7f3f3" />
    <Section id="testimonials" title="Testimonials" bgColor="#ffe" />
    <Section id="updates" title="Updates" bgColor="#f4e7e7" />
    <Section id="about" title="About Us" bgColor="#fff3e7" />
    <Section id="contact" title="Contact Us" bgColor="#f5f5f5" />
  </>
);

export default App;
