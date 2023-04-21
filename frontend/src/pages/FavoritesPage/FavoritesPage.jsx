import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const FavoritesPage = () => {
  const { token } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFavorites = async () => {
    try {
      let response = await axios.get(
        "http://127.0.0.1:5000/api/user_favorites",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFavorites(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error in fetchFavorites:", error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div className="favoritesList">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>Favorites</h2>
          <ul>
            {favorites.map((favorite) => (
              <li key={favorite.book_id}>
                <img src={favorite.thumbnail_url} alt={favorite.title} />
                <span>{favorite.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;