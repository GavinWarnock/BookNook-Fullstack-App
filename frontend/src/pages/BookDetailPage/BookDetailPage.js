import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import BookReviewList from "../../components/Reviews/Reviews";

const BookDetailPage = () => {
  const { bookid } = useParams();
  const [bookDetails, setBookDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
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

  const postFavorites = async () => {
    try {
      if (isFavorite) {
        // remove from favorites
        await axios.delete(
          `http://127.0.0.1:5000/api/user_favorites/${bookid}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsFavorite(false);
      } else {
        // add to favorites
        await axios.post(
          "http://127.0.0.1:5000/api/user_favorites",
          {
            book_id: bookid,
            title: bookDetails.volumeInfo.title,
            thumbnail_url: bookDetails.volumeInfo.imageLinks.small,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsFavorite(true);
      }
    } catch (error) {
      console.log("Error in postFavorites:", error);
    }
  };

  useEffect(() => {
    const checkFavorite = async () => {
      try {
        let response = await axios.get(
          `http://127.0.0.1:5000/api/user_favorites/${bookid}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsFavorite(true);
      } catch (error) {
        setIsFavorite(false);
      }
    };
    fetchBookDetails();
    checkFavorite();
  }, []);

  return (
    <div className="resultsList">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{bookDetails.volumeInfo.title}</h2>
          <img
            src={bookDetails.volumeInfo.imageLinks.small}
            alt="bookPhoto"
          />
          <p>Authors: {bookDetails.volumeInfo.authors}</p>
          <p
            className="description"
            dangerouslySetInnerHTML={{ __html: bookDetails.volumeInfo.description }}
          />
          <button onClick={postFavorites}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
          <BookReviewList bookid={bookid} token={token} />
        </div>
      )}
    </div>
  );
};

export default BookDetailPage;
