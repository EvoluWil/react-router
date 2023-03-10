import React from "react";
import ProductsList from '../../components/ProductsList'
import {allProducts} from '../../data/all'

class Home extends React.Component {
  render() {
    return (
      <ProductsList products={allProducts}/>
    );
  }
};

export default Home;
