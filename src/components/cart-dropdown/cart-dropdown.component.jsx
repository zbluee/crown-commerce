import React from "react";
import "./cart-dropdown.style.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">YOUR CART IS EMPTY</span>
      )}
    </div>
    <Link to="/checkout">
      <CustomButton onClick={() => dispatch(toggleCartHidden())}>
        GO TO CHECKOUT
      </CustomButton>
    </Link>
  </div>
);

//with out selector
// const mapStateToProps = ({cart : {cartItems}}) => ({
//   cartItems
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
/*once we pass mapStateToProps by default 'connect' will pass dispatch to props therefore we can
 access it directly in the component(it's not neccessary to write mapDispatchToProps method) */
// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden :() => dispatch(toggleCartHidden())
// })

export default connect(mapStateToProps)(CartDropdown);
