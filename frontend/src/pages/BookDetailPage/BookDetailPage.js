import React, { useState, useEffect } from "react";
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
      console.log(response.data);
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
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{bookDetails.volumeInfo.title} Details </h2>
           <img src={bookDetails.volumeInfo.imageLinks.small} alt={bookDetails.volumeInfo}/>
           <p>Description: {bookDetails.volumeInfo.description}</p>
           <p>Rating: {bookDetails.volumeInfo.averageRating}</p>
           
        </div>)}
    </div>
  );
};

export default BookDetailPage;
