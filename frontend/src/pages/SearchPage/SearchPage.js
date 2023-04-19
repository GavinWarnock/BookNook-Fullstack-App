import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
//Need to import Results List Here//
import "./SearchPage.css";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState("");
//ToDo: Create Axios request to fetch book information based on search term
//Hint: Use PostMan to confirm URL structure
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`You searched for ${searchTerm}`);
    };

    return (
        <div className='TODO'>
            <h1>Search Page!!!</h1>
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSubmit={handleSubmit}
            />
            <ResultsList />
        </div>
    );
}
 
export default SearchPage;