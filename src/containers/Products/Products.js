import React, { Component } from 'react';
import { connect } from 'react-redux';

import Product from '../../components/Product/Product'

import classes from './Products.module.css';
import * as actions from '../../store/actions/index';


class Products extends Component {


    componentDidMount () {
        this.props.onInitProducts()
            }

    

    render () {
        const title = this.props.products? 
        <h2 className={classes.ProductTitle}>{this.props.products.categories[0].name}</h2>
        :null
        return (
            <section>
                {title}
                <div className={classes.Products}>
                {this.props.products? this.props.products.categories[0].products.map(product => {
                    const filtered = product.prices.filter((price) => price.currency.symbol === '$')

                    return <Product 
                    key={product.id}
                    img={product.gallery[0]}
                    title={product.name}
                    price={filtered[0].amount}
                    symbol={filtered[0].currency.symbol}
                    />
                    }): null}
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitProducts: () => dispatch(actions.initProducts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);