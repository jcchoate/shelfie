import React, { Component } from 'react';
import Product from '../Product/Product'
import { HashRouter, Switch, Route, Link} from "react-router-dom"
import axios from 'axios'



class Dashboard extends Component {

    constructor(){
        super()

        this.state={
            products: []
        }
    }

    
    render() {
        return (<div className="dashboard">
            
            <Product />
            
        </div>
        )
    }
}
export default Dashboard;