import React, { Component } from 'react';

import Header from './components/Header/Header';
import Products from './containers/Products/Products'

import classes from './App.module.css'


class App extends Component {
  render () {
    return (
      <div className={classes.Wrapper}>
        <Header />
        <Products />
      </div>
    );
  }
}

export default App;
