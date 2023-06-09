import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import ResultsList from "../../components/ResultsList/ResultsList";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //ToDo: Create Axios request to fetch book information based on search term
  const fetchBooks = async () => {
    try {
      let lowerCaseSearchTerm = searchTerm.toLowerCase();
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${lowerCaseSearchTerm}&maxResults=20`
      );
      setSearchResults(response.data.items);
    } catch (error) {
      console.log("Error in fetchBooks request", error);
    }
  };
  //Hint: Use PostMan to confirm URL structure
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You searched for ${searchTerm}`);
    fetchBooks();
  };

  return (
    <div className="container search">
      <h1>What type of adventure are you looking for?</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
      />
      <ResultsList searchResults={searchResults} />
    </div>
    
  );
};

export default SearchPage;
