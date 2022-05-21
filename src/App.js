import React, { Component } from 'react';

import NavigationItems from './components/Navigation/NavigationItems/NavigationItems'
import Products from './containers/Products/Products'

import classes from './App.module.css'
import logo from './logo.png';

class App extends Component {
  render () {
    return (
      <div className={classes.Wrapper}>
        <header>
          <nav className={classes.HeaderNav}>
            <NavigationItems />
              <div>
              <img className={classes.Logo} src={logo} alt="logo" />
              </div>
              <ul>
                <li><a href="javascript:void(0)">Currency</a></li>
                <li><a href="javascript:void(0)">Cart</a></li>
              </ul>
          </nav>
        </header>
        <Products />
      </div>
    );
  }
}

export default App;
