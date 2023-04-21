import React from "react";
import { Link } from "react-router-dom";

const ResultsList = ({ searchResults }) => {
  return (
    <div className="resultsContainer">
      {searchResults.map((book) => (
        <div key={book.id} className="resultsCard">
          <Link to={`/details/${book.id}`}>
            <div>
              <h3>{book?.volumeInfo.title}</h3>
              {book?.volumeInfo.imageLinks ? (
                <img
                  src={book?.volumeInfo.imageLinks.smallThumbnail}
                  alt={book?.volumeInfo.title}
                />
              ) : (
                <div>No Image Available</div>
              )}
              <h3>Average Rating: {book?.volumeInfo.averageRating} </h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
