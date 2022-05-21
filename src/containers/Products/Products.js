import React, { Component } from 'react';
import { gql } from "@apollo/client";
import client from '../../graphql';

import Product from '../../components/Product/Product'

import classes from './Products.module.css';



class Products extends Component {

    state = {
        products: null,
        error: false
    }

    componentDidMount () {
        client.query({
                query: gql`
                            query GetCategories {
                                categories {
                                name
                                products {
                                    name
                                    id
                                    gallery
                                        prices {
                                        amount
                                        currency {
                                        symbol
                                        }
                                    }
                                }
                                }  
                            }
                    `
                })
                .then( response => {
                    console.log(response.data.categories[0].products)
                    this.setState( { products: response.data.categories[0].products } );
                })
        
            }

    

    render () {
        
        return (
            <section>
                <h2 className={classes.ProductTitle}>All</h2>
                <div className={classes.Products}>
                {this.state.products? this.state.products.map(product => {
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

export default Products;