import React from "react";
import ProductsList from '../../components/ProductsList'
import { maleProducts } from "../../data/male";

class Male extends React.Component {
  render (){
    return (
      <ProductsList products={maleProducts}/>
    );
  }
};

export default Male;
