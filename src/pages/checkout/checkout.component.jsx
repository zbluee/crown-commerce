import React from "react";
import "./checkout.style.scss";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.compoenent";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.length ? (
      cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))
    ) : (
      <span className="empty-message">YOUR CART IS EMPTY</span>
    )}
    <div className="total">
      <span>TOTAL : ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payment
      <br />
      4242 4242 4242 4242 ---Exp:02/23 ---CW: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalPrice,
});
export default connect(mapStateToProps)(CheckoutPage);
