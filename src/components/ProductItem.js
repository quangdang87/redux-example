import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const ProductItem = ({product, onAddToCartClicked}) => (
  <div style={{marginBottom: 20}}>
    <Product
      title={product.title}
      price={product.price}
      quantity={product.quantity}
    />

    <button
      disabled={
        !product.quantity ||
        (product.inventory !== undefined && product.inventory === 0)
          ? "disabled"
          : ""
      }
      onClick={onAddToCartClicked}
    >
      {product.inventory !== undefined && product.inventory === 0
        ? "Sold Out"
        : "Add to cart"}
    </button>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
};

export default ProductItem;
