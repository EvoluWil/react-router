import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header'
import './App.css';
import Male from './pages/Male';
import Female from './pages/Female';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

class App extends Component {
  render() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/male" exact component={Male} />
        <Route path="/female" component={Female} />
        <Route path="/product-detail/:productId" component={ProductDetail} />
      </Switch>
    </>
  );
  }
}

export default App;
