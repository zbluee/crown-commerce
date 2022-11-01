import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // stripe accepts payment in cent
  const publishableKey =
    "pk_test_51LzERgCqKU84eQGMwWD3kFAqeAIxpsxaJA0LdMY0VpAynrWdJZD1AprhDkOcO9kJaVR5o0tLwVxOhjb9VQrmMYCk00f3qtrVN2";

  const token = (token) => {
    console.log(token);
    alert("payment successfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Commercing PLC."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/nmv.svg"
      description={`Total Price : $${price}`}
      panelLabel="Pay Now"
      amount={priceForStripe}
      stripeKey={publishableKey}
      token={token}
    />
  );
};

export default StripeCheckoutButton;
