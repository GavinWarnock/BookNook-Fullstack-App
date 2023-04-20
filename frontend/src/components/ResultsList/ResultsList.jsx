import React from "react";
import "./ResultsList.css";
import { Link } from "react-router-dom";
const ResultsList = ({ searchResults }) => {
  return (
    <div className="resultsList">
      <h2>Search Results:</h2>
      {searchResults.map((book, index) => (
        <Link key={index} to={`/details/${book.item.valueInfo.title}`}>
          <div>
            <h3>{book.item.valueInfo.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ResultsList;
