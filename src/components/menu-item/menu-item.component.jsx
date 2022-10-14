import React from "react";
import "./menu-item.style.scss";
import withRouter from "../with-router/with-router.componet";

const MenuItem = ({ title, imageUrl, size, linkUrl, router }) => (
  <div className={`${size} menu-item`} onClick={() => router.navigate(linkUrl)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
