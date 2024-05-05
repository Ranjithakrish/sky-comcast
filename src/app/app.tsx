"use client"
import React, { useState, useEffect, use } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchITuneData } from '@/GlobalRedux/slices/getITunesDataSlice';
import { Icon, Title, Footer, Container, SearchBar } from '@/sylesheets/styles'
import { NextUIProvider } from '@nextui-org/system';
import Cards from '@/components/cards';
import MyPagination from '@/components/pagination'
import Img from '@/components/Image';
import Search from '@/components/search';


const HomePage: React.FC = () => {
    const [iTunesData, setITunesData] = useState<any>();
    const [currentPage, setCurrentPage] = useState<any>(1); // Current page number
    const [paginatedPosts, setPaginatedPosts] = useState<any>();
    const [searchValue, setSearchValue] = useState<any>();
    const [searchCateogry, setSearchCateogry] = useState<any>();
    const [searchData, setSearchData] = useState<any>();
    const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false);
    const pageCardCnt: number = 8; // Total number of pages
    const [cardsLength, setCardsLength] = useState<any>();

    const dispatch: Dispatch<any> = useDispatch();
    const { data } = useSelector((state: any) => state.data);

    const paginate = (items: any, pageNumber: number, pageSize: number) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return items.slice(startIndex, startIndex + pageSize);
    };
    const handleSearchValueWithCateogry = () => {
        const displaySearchedData = iTunesData?.entry.filter((tunes: any) => {
            return (
                searchCateogry === 'artist' ?
                    tunes['im:artist']?.label.toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    tunes['im:artist']?.label.toLowerCase().endsWith(searchValue.toLowerCase()) :
                    tunes.category?.attributes?.label.toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    tunes.category?.attributes?.label.toLowerCase().endsWith(searchValue.toLowerCase())
            )
        })
        return displaySearchedData
    }

    useEffect(() => {
        if (iTunesData?.entry) setPaginatedPosts(searchData && isSearchClicked ? paginate(searchData, currentPage, pageCardCnt) : paginate(iTunesData?.entry, currentPage, pageCardCnt));
    }, [iTunesData?.entry, currentPage, searchData, isSearchClicked])

    useEffect(() => {
        if (searchValue && searchCateogry && isSearchClicked) {
            const searchData = handleSearchValueWithCateogry();
            setCardsLength(searchData.length);
            setSearchData(searchData);
        }
    }, [searchValue, searchCateogry, isSearchClicked]);

    useEffect(() => {
        dispatch(fetchITuneData());
    }, [dispatch])

    useEffect(() => {
        if (data && !isSearchClicked) {
            setITunesData(data.feed);
            setCardsLength(data.feed?.entry.length);
        }
    }, [data, isSearchClicked])

    return (
        <NextUIProvider>
            {iTunesData && <>
                <Container>
                    <Icon><Img src={iTunesData?.icon?.label} width={50} height={50} /></Icon>
                    <Title>
                        {iTunesData?.title?.label}
                    </Title>
                    <SearchBar>
                        <Search
                            setSearchValue={setSearchValue}
                            searchValue={searchValue}
                            setSearchCateogry={setSearchCateogry}
                            setIsSearchClicked={setIsSearchClicked}
                        />
                    </SearchBar>
                </Container>
                <Cards iTunesData={paginatedPosts} />

                <Footer>
                    <MyPagination setCurrentPage={setCurrentPage} cardsLength={cardsLength} pageCardCnt={pageCardCnt} />
                </Footer>

            </>}
        </NextUIProvider>
    );
}

export default HomePage;
