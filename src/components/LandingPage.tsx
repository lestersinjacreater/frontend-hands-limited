import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Our Landing Page</h1>
        <p>Your journey starts here!</p>
      </header>
      <section>
        <h2>Features</h2>
        <ul>
          <li>Feature 1: Amazing quality</li>
          <li>Feature 2: User-friendly interface</li>
          <li>Feature 3: 24/7 Support</li>
        </ul>
      </section>
      <section>
        <h2>Call to Action</h2>
        <button>Get Started</button>
      </section>
    </div>
  );
};

export default LandingPage;