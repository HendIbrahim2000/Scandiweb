import React, { Component } from 'react';
import { gql } from "@apollo/client";
import client from '../../../graphql';

import classes from './Currencies.module.css';

class Currencies extends Component {

    state = {
        currencies: null
    }

    componentDidMount () {
        client.query({
                query: gql`
                        query GetCurrency {
                            currencies {
                            symbol,
                            label
                            }
                        
                        }
                    `
                })
                .then( response => {
                    this.setState( { currencies: response.data.currencies } );
                    console.log(response.data.currencies)

                })
        
            }

    render () {
        const currency = this.state.currencies? this.state.currencies.map(currency => (
            <li key={currency.symbol}>{currency.label} <span>{currency.symbol}</span></li>
        )): null

        return (
            <li className={classes.Currencies}>
                <a>{this.state.currencies?this.state.currencies[0].symbol : null} <span className={classes.ArrowDown}></span></a>
                <div className={classes.DropdownMenu}>
                <ul>
                    {currency}
                </ul>
                </div>
            </li>
        )
    }
}

export default Currencies;