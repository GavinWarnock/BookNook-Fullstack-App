import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import BookReviewList from "../../components/Reviews/Reviews";

const BookDetailPage = () => {
  const { bookid } = useParams();
  const [bookDetails, setBookDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useContext(AuthContext);

  const fetchBookDetails = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookid}`
      );
      setBookDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error in fetchBooksDetails:", error);
    }
  };



  useEffect(() => {
    fetchBookDetails();
  }, []);

  return (
    <div className="resultsList">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{bookDetails.volumeInfo.title} Details </h2>
          <img
            src={bookDetails.volumeInfo.imageLinks.small}
            alt={bookDetails.volumeInfo}
          />
          <p>Authors: {bookDetails.volumeInfo.authors}</p>
          <p className='description' dangerouslySetInnerHTML={{ __html: bookDetails.volumeInfo.description }} />
          <BookReviewList bookid={bookid} token={token} />
        </div>
      )}
    </div>
  );
};

export default BookDetailPage;
