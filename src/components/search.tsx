import { useState } from 'react';
import SelectDetail from './select';
import SearchButton from './button';
import { SearchInput } from '@/sylesheets/styles';

const Search = ({ setSearchValue, searchValue, setSearchCateogry, setIsSearchClicked }: { setSearchValue: any, searchValue: any, setSearchCateogry: any, setIsSearchClicked: any }) => {
    return (
        <div>
            <SelectDetail setSearchCateogry={setSearchCateogry} />
            <SearchInput
                type="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Enter search term"
            />
            <SearchButton setIsSearchClicked={setIsSearchClicked} setSearchValue = {setSearchValue}/>
        </div>
    );
};

export default Search;