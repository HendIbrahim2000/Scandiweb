import React, { Component } from 'react';

import NavigationItems from './Navigation/NavigationItems/NavigationItems'
import Currencies from './Currencies/Currencies'

import classes from './Header.module.css'
import logo from '../../assets/logo.png';
import cartImg from '../../assets/cart.png';

class Header extends Component {
    render () {
      return (
        <header>
          <nav className={classes.HeaderNav}>
            <NavigationItems />
              <div>
              <img className={classes.Logo} src={logo} alt="logo" />
              </div>
              <ul>
                <Currencies />
                <li><a><img src={cartImg} alt="" /> <span className={classes.CartCount}>1</span></a></li>
              </ul>
          </nav>
        </header>
      )
    }
}

export default Header;