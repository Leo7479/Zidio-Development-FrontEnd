import React from "react";
import { Link } from "react-router-dom";
import '../styles/error.css';
import errorImage from '../resources/pagenotfound.png'; // Adjust path as needed
import Header from "../components/Header";
import { ArrowRight } from "lucide-react";

const Error404Page = () => {

  return (
    <div className="error-wrapper" role="main" aria-labelledby="error-title">
      <Header activePage="error" />
      <div className="error-card">
        <main className="error-main side-by-side">
          <div className="error-image">
            <img src={errorImage} alt="404" />
          </div>
          <div className="error-text">
            <h1 id="error-title" className="bounce">404</h1>
            <h2>Oops! Page not Available.</h2>
            <button><Link to="/">Find More <ArrowRight /></Link></button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Error404Page;
