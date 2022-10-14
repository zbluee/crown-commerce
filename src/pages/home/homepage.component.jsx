import React from "react";
import "./homepage.style.scss";
import Directory from "../../components/directory-menu/directory-menu.component";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="homepage">
    <Link to="shop">Shop</Link>
    <Directory />
  </div>
);

export default HomePage;
