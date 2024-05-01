"use client"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Img from './Components/Image';

// Define the styled component for the 3D title
const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 0px #333, 4px 4px 0px #777;
  color: #00008B
`;

// Wrapper component to apply Bootstrap container styles
const Container = styled.div`
  text-align: center; 
  margin: 0 auto; 
  text-align: left
  max-width: 960px;
  padding: 20px;
`;

const HomePage: React.FC = () => {
  const [message, setMessage] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
      const data = await response.json();
      setMessage(data.feed);
    }
    fetchData();
  }, []);

  return (
    <div>
       <header>
      <Container>
      {message && <Title>{message?.title?.label}</Title> }
      {message?.entry.map((img: any, i: number) => (
        <div key={i}>
            <h2>{img?.title?.label}</h2>
            <Img 
            src = {img['im:image'][0]?.label}
            link = {img?.link?.attributes?.href}
            />
            <figcaption>{`Release Date: ${img['im:releaseDate']?.label}`}</figcaption>
            <figcaption>{`Artist: ${img['im:artist']?.label}`}</figcaption>
            <figcaption>{`Category: ${img.category?.attributes?.label}`}</figcaption>
            <figcaption>{`Price: ${img['im:price']?.label}`}</figcaption>
        </div>
      ))}
      </Container>
    </header>
    </div>
  );
}

export default HomePage;
