import React from "react";
import { connect } from "react-redux";
import {addItem, removeItem, clearItem } from "../../redux/cart/cart.action";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item, removeItem, addItem, clearItem }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-items">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="decrease-button" onClick={() => removeItem(item)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="increase-button" onClick={() => addItem(item)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: item => dispatch(clearItem(item)),
  addItem : item => dispatch(addItem(item)),
  removeItem : item => dispatch(removeItem(item))

});


export default connect(null, mapDispatchToProps)(CheckoutItem);
