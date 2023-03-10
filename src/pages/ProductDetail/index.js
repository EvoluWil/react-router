import React from "react";
import {allProducts} from '../../data/all'

import "./styles.css";

class ProductDetail extends React.Component {
  render() {
    const { match } = this.props;
    const { productId } = match.params;

    const product = allProducts.find(product => product.id === productId);
    return (
      <ul>
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.price}</span>
        </li>
      </ul>
    );
  }
};

export default ProductDetail;
