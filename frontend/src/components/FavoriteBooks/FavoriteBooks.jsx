import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {HeartFill} from "react-bootstrap-icons";

const FavoriteBooks=({auth}) => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
        }, []);
    async function fetchFavorites (){
      try {
        let response = await axios.get("http://127.0.0.1:5000/api/user_favorites", {
          headers: {
            Authorization: auth,
          },
        });
        setFavorites(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
          };

    return (
        <div className='resultsContainer'>
            {favorites.length > 0 ?
            favorites.map((bookDetails, index) => {
            return(
                <Link key={index} to={`/details/${bookDetails.book_id}`}>
                    <div className='resultsCard'>
                        <img src={bookDetails.thumbnail_url} alt={`${bookDetails.title}`} />
                        <h2>{bookDetails.title}</h2>
                        <button><HeartFill />{' '}</button>
                    </div>
                </Link>
            )
        })
        :null}
    </div>
  );
};

export default FavoriteBooks;