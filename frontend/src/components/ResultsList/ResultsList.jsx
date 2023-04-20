import React from "react";
import "./ResultsList.css";
import { Link } from "react-router-dom";
const ResultsList = ({ searchResults }) => {
  return (
    <div className="resultsList">
      <h2>Search Results:</h2>
      {searchResults.map((book) => (
        <Link key={book.id} to={`/details/${book.id}`}>
          <div>
            <h3>{book?.volumeInfo.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ResultsList;
