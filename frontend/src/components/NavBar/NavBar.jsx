import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Quills and Swords</b>
          </Link>
        </li>
       
        <li class="dropdown">
          <button class="dropbtn">Menu
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#home">Home</a>
            <a href="#Search">Search</a>
            {user ? (
              <a onClick={logoutUser}>Logout</a>
            ) : (
              <a onClick={() => navigate("/login")}>Login</a>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
