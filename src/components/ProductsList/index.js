import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

class ProductsList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <ul>
        {products.map((product) => (
          <Link key={product.id} to={`/product-detail/${product.id}`} style={{textDecoration: 'none', color: '#0a0a0a'}}>
            <li>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.price}</span>
            </li>
          </Link>
        ))}
      </ul>
    );
  }
};

export default ProductsList;
