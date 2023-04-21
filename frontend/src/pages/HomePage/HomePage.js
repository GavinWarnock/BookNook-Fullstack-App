import React from "react";
import useAuth from "../../hooks/useAuth";
import FavoriteBooks from "../../components/FavoriteBooks/FavoriteBooks";

const HomePage = () => {
  const [user, token] = useAuth()
    const auth = "Bearer " + token;

    return(
        <main>
            <FavoriteBooks auth={auth}/>
        </main>
    )
};
export default HomePage;

  