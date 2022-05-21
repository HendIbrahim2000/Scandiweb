import React, { Component } from 'react';
import { gql } from "@apollo/client";
import client from '../../../graphql';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


class NavigationItems extends Component {

    state = {
        categories: null,
        error: false
    } 

    componentDidMount () {
        client.query({
                query: gql`
                        query GetCategories {
                            categories {
                            name
                            }  
                        }
                    `
                })
                .then( response => {
                    this.setState( { categories: response.data.categories } );
                    // console.log(response.data.categories)
                })
        
            }

            

    render () {
        const navigationItem = this.state.categories? this.state.categories.map((category, index) => {
                    
            return <NavigationItem link={category.name} key={category.name}>{category.name}</NavigationItem>
            }): null
        
        return (
                <ul className={classes.NavigationItems}>     
                    {navigationItem}
                </ul>
        )
            
    }
}

export default NavigationItems;