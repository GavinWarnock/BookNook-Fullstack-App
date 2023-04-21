import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const BookDetailPage = () => {
  const { bookid } = useParams();
  const [bookDetails, setBookDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isReviewing, setIsReviewing] = useState(false);
  const [review, setReview] = useState("");
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

  const handleReviewSubmit = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const data = {
        review_text: review,
        book_id: bookid,
      };
      const response = await axios.post(
        "http://127.0.0.1:5000/api/user_reviews",
        data,
        { headers }
      );
      console.log(response.data);
      setIsReviewing(false);
    } catch (error) {
      console.log(error);
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
          <p className='description' dangerouslySetInnerHTML={{ __html: bookDetails.volumeInfo.description }} />
          <p>Rating: {bookDetails.volumeInfo.averageRating}</p>
          {isReviewing ? (
            <div>
              <input
                type="text"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
              <button onClick={handleReviewSubmit}>Submit</button>
            </div>
          ) : (
            <button onClick={() => setIsReviewing(true)}>Add review</button>
          )}
        </div>
      )}
    </div>
  );
};

export default BookDetailPage;
