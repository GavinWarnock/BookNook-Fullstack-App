import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
//Need to import Results List Here//
import "./SearchPage.css";
import axios from 'axios';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("Harry Potter");
    const [searchResults, setSearchResults] = useState("");
//ToDo: Create Axios request to fetch book information based on search term
const fetchBooks = async () => {
    try{
        let lowerCaseSearchTerm = searchTerm.toLowerCase();
        let response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${lowerCaseSearchTerm}&maxResults=35`
        );
        setSearchResults(response.data.items);
    } catch (error) {
        console.log("Error in fetchBooks request", error)
    }
}
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
            <button onClick={fetchBooks}>Get All Books</button>
            {/* <ResultsList /> */}
        </div>
    );
}
 
export default SearchPage;