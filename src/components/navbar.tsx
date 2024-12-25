import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  background-color: #000;
  padding: 1rem;
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Navbar: React.FC = () => (
  <NavBarContainer>
    {['Home', 'Products', 'Services', 'Testimonials', 'Updates', 'About', 'Contact'].map((section) => (
      <Link key={section} to={section.toLowerCase()} smooth={true} duration={500}>
        {section}
      </Link>
    ))}
  </NavBarContainer>
);

export default Navbar;
