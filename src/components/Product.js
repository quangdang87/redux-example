import React from "react";
import PropTypes from "prop-types";

const Product = ({price, quantity, title}) => (
  // product component should render title and price
  // It should render title, price and quantity when given inventory
  <div>
    <p>{title}</p>
    <p> - ${price}</p>
    {quantity && <p> x {quantity}</p>}
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
};

export default Product;
