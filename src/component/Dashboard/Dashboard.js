import React, { Component } from 'react';
import Product from '../Product/Product'


class Dashboard extends Component {
    render() {
        return (<div>
            <h1>Hello from Dash</h1>
            <h1>{this.props.propstate}</h1>
            <Product/>
        </div>
        )
    }
}
export default Dashboard;