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
export const Container = styled.div`
  margin:0 auto;
  background-color: #334558;
`;
export const Title = styled.div`
  font-size: 3rem;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  display: inline-block;
  margin: 0 0 0 50px;
  margin-left: 10px;
`;

export const Icon = styled.div`
  display:inline-block;
  margin-left: 40px;
  margin-bottom: -10px;
`;

export const SearchBar = styled.div`
  display: inline-block;
  margin-left: 400px;
  position: absolute;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  background-color: #356391;
  border: 2px solid #008CBA;
  border-radius: 18px;
  color: black;
  height: 40px;
  text-align: center;
`;

export const SelectInput = styled.select`
  background-color: #356391;
  display: inline-block;
  border: 2px solid #008CBA;
  border-radius: 18px;
  color: #6a6791;
  cursor: pointer;
  margin-left: -120px;
  color: black;
  height: 40px;
`;

export const Button = styled.button`
  background-color: #356391; 
  color: black; 
  border: 2px solid #008CBA;
  border-radius: 18px;
  width: 100px;
  height: 40px;
`;

export const ClearButton = styled.button`
  background-color: red; 
  color: black; 
  border: 2px solid #008CBA;
  border-radius: 18px;
  width: 100px;
  height: 40px;
`;

export const Parent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: #334558;
  padding: 20px;
  height: 650px;
`;

export const Child = styled.div`
  background-color: #36342f;
  color: #fff;
  padding: 7px;
  text-align: center;
  font-family: monospace;
  margin-bottom: 2rem;
  width: 23%;
  border: 1px solid transparent; /* Initial border set to transparent */
  &:hover {
    animation: ${neonAnimation} 1s ease-in-out infinite alternate;
  }
`;
export const Footer = styled.div`
  background-color: #334558;
  display: flex;
  align-items: center;
  justify-content: center;
`