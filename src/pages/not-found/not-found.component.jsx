import React from "react";
import "./not-found.styles.scss";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom-button/custom-button.component";

const NotFound = () => (
  <div className="notfound-page">
    <div className="notfound">
      <div className="notfound-404"></div>
      <h1>404</h1>
      <h2>Oops! Page Not Be Found</h2>
      <p>
        Sorry but the page you are looking for does not exist,
         Route does not exist or is temporarily unavailable
      </p>
      <Link to="/"><CustomButton>Back to homepage</CustomButton></Link>
    </div>
  </div>
);

export default NotFound;
