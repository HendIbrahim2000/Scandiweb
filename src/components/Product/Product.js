import React, { Component } from 'react';

import classes from './Product.module.css';

class Product extends Component {

    // state = {
    //     show: false
    // }

    // hideActions = () => {
        
    //     this.setState({show: false})
    // }

    // showActions = () => {
        
    //     this.setState({show: true})
    // }
    render () {
        
        return (
            <div className={classes.Product}>
                {/* <div onClick={this.hideActions} className={this.state.show? classes.Show: classes.Hide}>
                    <div className={classes.Actions}>
                        <ul>
                            <li><a href="/">Edit</a></li>
                            <li><a href="/">Avilability</a></li>
                            <li><a href="/">Make private</a></li>
                            <li><a href="/">Delete</a></li>
                        </ul>
                    </div>
                </div>
                <a href="javascript:void(0)" className={!this.state.show?classes.ShowAction: classes.Hide} onClick={this.showActions}>
                    <span></span>
                    <span></span>
                    <span></span>
                 </a> */}
                <img src={this.props.img} alt="product" />
                <div>
                    <p>{this.props.title}</p>
                    <p className={classes.Price}>{this.props.symbol} {this.props.price} </p>
                </div>
                
            </div>
        )
    }
}



export default Product;