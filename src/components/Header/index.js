import React, {Component} from "react";
import { Link } from "react-router-dom";

import './styles.css';

import logo from "../../assets/images/logo.png";

class Header extends Component {
  render () {
    return (
    <header>
      <Link to="/">
        <img src={logo} alt="TrybeShoes" />
      </Link>

      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px'}}>
      <Link className="link" to="/">
        <div>
          <strong>HOME</strong>
        </div>
      </Link>
      <Link className="link" to="/male">
        <div>
          <strong>MASCULINO</strong>
        </div>
      </Link>
      <Link className="link" to="/female">
        <div>
          <strong>FEMININO</strong>
        </div>
      </Link>
      </div>
    </header>
  );
}
};

export default Header;
