import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Error.css';
import errorImage from '../resources/pagenotfound.png'; // Adjust path as needed

const Error404Page = () => {
  const navigate = useNavigate();

  return (
    <div className="error-wrapper" role="main" aria-labelledby="error-title">
      <div className="error-card">
        <header className="error-header">
          <nav className="error-nav" aria-label="Main navigation">
            <a href="/">Men</a>
            <a href="/">Women</a>
            <a href="/">Kids</a>
            <a href="/">Decors</a>
            <a href="/">Beauty</a>
            <div className="search-container">
              <input type="text" placeholder="Search your favourites..." aria-label="Search your favourites" />
              <span className="search-icon" aria-hidden="true">🔍</span>
            </div>
          </nav>
        </header>

        <main className="error-main side-by-side">
          <div className="error-image">
            <img src={errorImage} alt="404" />
          </div>
          <div className="error-text">
            <h1 id="error-title" className="bounce">404</h1>
            <h2>Oops! Page not Available.</h2>
            <p>Search for your favourite</p>
            <button onClick={() => navigate('/')}>Start Exploring →</button>
          </div>
        </main>

        <footer className="error-footer">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
        </footer>
      </div>
    </div>
  );
};

export default Error404Page;
