import styled, { keyframes } from 'styled-components';

// Define keyframes for the neon effect
const neonAnimation = keyframes`
    0% {
        border-color: #ff00de;
      }
    100% {
        border-color: #00f;
      }
`;
// Define the styled component for the 3D title
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 0px #333, 4px 4px 0px #777;
  color: #00008B
`;

// Wrapper component to apply Bootstrap container styles
export const Container = styled.div`
  text-align: center; 
 width: 100%;
 height: 100%;    
`;

export const Parent = styled.div`
  display: grid;
  gap: 50px 100px;
  grid-template-columns: auto auto auto auto;
  background-color: #001133;
  padding: 20px;
`;

export const Child = styled.div`
  background-color: #000;
  color: #fff;
  padding: 7px;
  text-align: center;
  font-family: monospace;
  border: 1px solid transparent; /* Initial border set to transparent */

  &:hover {
    animation: ${neonAnimation} 1s ease-in-out infinite alternate;
  }
`;
export const Footer = styled.div`
  background-color: #03a9f4;
  marginLeft: 450px
`