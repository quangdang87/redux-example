import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const Cart = ({products, total, onCheckoutClicked}) => {
  // Cart component should display total products
  // It should display a message "You can add some products to cart."
  // When product is added it should display title, price and quantity.

  return (
    <div>
      <h3>Your Cart</h3>
      <em>You can add some products to cart.</em>
      <div>
        {products.map((product) => (
          <Product
            title={product.title}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>
      <p>Total: &#36;{total}</p>
      <button
        onClick={onCheckoutClicked}
        disabled={total === "0" || !total ? "disabled" : ""}
        // Should diable button only when no products are there in the cart.
      >
        {" "}
        Check Out
        {/* When checkout is clicked the cart should be refreshed and the button
        should be disabled. Checkout*/}
      </button>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
};

export default Cart;
