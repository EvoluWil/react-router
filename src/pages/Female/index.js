import React from "react";
import ProductsList from '../../components/ProductsList'
import {femaleProducts} from '../../data/female'

class Female extends React.Component {
  render() {
    return (
      <ProductsList products={femaleProducts}/>
    );
  }
};

export default Female;
