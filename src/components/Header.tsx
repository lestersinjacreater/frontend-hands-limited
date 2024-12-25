import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #000;
  img {
    width: 120px;
  }
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <img src="/path-to-your-logo.png" alt="Logo" />
  </HeaderContainer>
);

export default Header;
