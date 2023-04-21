import React from "react";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  const [user, token] = useAuth()
    const auth = "Bearer " + token;

    return(
        <main>
            <h1>Welcome to Quills and Swords</h1>
        </main>
    )
};
export default HomePage;

  