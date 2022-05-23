import * as actionTypes from './actionTypes';
import { gql } from "@apollo/client";
import client from '../../graphql';

export const setProducts= ( products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        products: products
    };
};

export const fetchProductsFailed = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILED
    };
};

export const initProducts= () => {
    return dispatch => {
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
                
                dispatch(setProducts(response.data));
            })
            .catch( error => {
                dispatch(fetchProductsFailed());
            } );
            
    };
};