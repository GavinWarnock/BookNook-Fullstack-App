import React, { useState, useEffect } from "react";
import "./BookDetailPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetailPage = () => {
  const { bookid } = useParams();
  const [bookDetails, setBookDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchBookDetails = async () => {
    try {
      //Make axios request
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookid}`
      );
      setBookDetails(response.data);
      setIsLoading(false)
    } catch (error) {
      console.log("Error in fetchBooksDetails:", error);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, []);
 

  return (
    <div className="resultsList">
      <h2>Details {bookid} </h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
            Description: {bookDetails.volumeInfo.title}
        </div>)}
    </div>
  );
};

export default BookDetailPage;
