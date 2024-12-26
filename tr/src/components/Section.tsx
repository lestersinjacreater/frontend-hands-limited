import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section<{ bgColor?: string }>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor || '#fff'};
  color: #000;
  text-align: center;

  h1 {
    font-size: 2.5rem;
  }
`;

interface SectionProps {
  id: string;
  bgColor?: string;
  title: string;
}

const Section: React.FC<SectionProps> = ({ id, bgColor, title }) => (
  <SectionContainer id={id} bgColor={bgColor}>
    <h1>{title}</h1>
  </SectionContainer>
);

export default Section;
