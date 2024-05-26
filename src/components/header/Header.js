import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <nav>
          <h2 className="logo">'D'E'M' TEAM PROJECT</h2>
        </nav>
        <nav>
          <Link to="/movies/popular" style={{ textDecoration: "none" }}>
            <span>Popular</span>
          </Link>
        </nav>
        <nav>
          <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
            <span>Top Rated</span>
          </Link>
        </nav>
        <nav>
          {" "}
          <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
            <span>Upcoming</span>
          </Link>
        </nav>
        <nav>
            {" "}
          <Link to="/aisearch" style={{ textDecoration: "none" }}>
            <span>AI Search</span>
          </Link>
        </nav>
        <nav>
          {" "}
          <Link to="/about" style={{ textDecoration: "none" }}>
            <span>About</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
