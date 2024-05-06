import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchITuneData } from '@/GlobalRedux/slices/getITunesDataSlice';
import { Icon, Title, Footer, Container, SearchBar } from '@/sylesheets/styles';
import { NextUIProvider } from '@nextui-org/system';
import Cards from '@/components/cards';
import MyPagination from '@/components/pagination';
import Img from '@/components/Image';
import Search from '@/components/search';

const HomePage: React.FC = () => {
    const [iTunesData, setITunesData] = useState<any>();
    const [currentPage, setCurrentPage] = useState<number>(1); // Current page number
    const [paginatedPosts, setPaginatedPosts] = useState<any>();
    const [searchValue, setSearchValue] = useState<any>(); // user entered search value
    const [searchCateogry, setSearchCateogry] = useState<string>("option");
    const [searchData, setSearchData] = useState<any>(); // search result data
    const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false);
    const [cardsLength, setCardsLength] = useState<number>(0); // cards length for all data || searched data
    const pageCardCnt: number = 8; // Total number of pages

    // Get dispatch function from useDispatch hook.
    const dispatch: Dispatch<any> = useDispatch();

    // Select relevant data from the Redux store using useSelector hook.
    const { data } = useSelector((state: any) => state.data);

    // function for pagination.
    const paginate = (items: any, pageNumber: number, pageSize: number) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return items.slice(startIndex, startIndex + pageSize);
    };

    // function for handling search with category.
    const handleSearchValueWithCateogry = () => {
        const displaySearchedData = iTunesData?.entry.filter((tunes: any) => {
            return (
                searchCateogry === 'artist' ?
                    tunes['im:artist']?.label.toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    tunes['im:artist']?.label.toLowerCase().endsWith(searchValue.toLowerCase()) :
                    tunes.category?.attributes?.label.toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    tunes.category?.attributes?.label.toLowerCase().endsWith(searchValue.toLowerCase())
            )
        });
        return displaySearchedData;
    };

    // useEffect hook to update paginated posts when data or search state changes.
    useEffect(() => {
        if (iTunesData?.entry) setPaginatedPosts(searchData && isSearchClicked ? paginate(searchData, currentPage, pageCardCnt) : paginate(iTunesData?.entry, currentPage, pageCardCnt));
    }, [iTunesData?.entry, currentPage, searchData, isSearchClicked]);

    // useEffect hook to update search data when search state changes.
    useEffect(() => {
        if (searchValue && searchCateogry && isSearchClicked) {
            const searchData = handleSearchValueWithCateogry();
            setCardsLength(searchData.length);
            setSearchData(searchData);
        }
    }, [searchValue, searchCateogry, isSearchClicked]);

    // useEffect hook to fetch iTunes data from the Redux store on component mount.
    useEffect(() => {
        dispatch(fetchITuneData());
    }, [dispatch]);

    // useEffect hook to set iTunes data and cards length when data changes.
    useEffect(() => {
        if (data && !isSearchClicked) {
            setITunesData(data.feed);
            setCardsLength(data.feed?.entry.length);
        }
    }, [data, isSearchClicked]);

    return (
        <NextUIProvider>
            {iTunesData && <>
                <Container>
                    <div>
                        <Icon><Img src={iTunesData?.icon?.label} width={50} height={50} /></Icon>
                        <Title data-testid="title">
                            {iTunesData?.title?.label}
                        </Title>
                    </div>
                    <SearchBar data-testid="search-bar">
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
