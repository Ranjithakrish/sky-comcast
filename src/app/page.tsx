"use client"
import React, { useState, useEffect, use } from 'react';
import {Container, Title, Footer } from '@/sylesheets/styles'
import {NextUIProvider} from '@nextui-org/system';
import Cards from '@/components/cards';
import MyPagination from '@/components/pagination'


const HomePage: React.FC = () => {
  const [iTunesData, setITunesData] = useState<any>();
  const [currentPage, setCurrentPage] = useState<any>(1); // Current page number
  const [paginatedPosts, setPaginatedPosts] = useState<any>();
  const pageSize: number = 10; // Total number of pages

  const paginate = (items: any, pageNumber: number, pageSize: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
};

  useEffect(() => {
    const pagesCount = Math.ceil(iTunesData?.entry.length / pageSize);
    setPaginatedPosts(iTunesData?.entry && paginate(iTunesData?.entry, currentPage, pagesCount));
  }, [iTunesData?.entry, currentPage])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
      const data = await response.json();
      setITunesData(data.feed);
    }
    fetchData();
  }, []);

  return (
    <NextUIProvider>
      {iTunesData && <Container>
        <h2>{iTunesData?.title?.label}</h2>
      <Cards iTunesData = {paginatedPosts} />
    
      <Footer>
      <MyPagination setCurrentPage={setCurrentPage} />
      </Footer>

      </Container>}
    </NextUIProvider>
  );
}

export default HomePage;
