import React from "react";
import PropTypes from "prop-types";

const ProductsList = ({children, title}) => (
  // should render product title and its children
  <div>
    <h3>{title}</h3>
    {children}
  </div>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default ProductsList;
