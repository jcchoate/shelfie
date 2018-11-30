import React, { Component } from 'react';
import axios from 'axios'
import { HashRouter, Switch, Route, Link} from "react-router-dom"


class Product extends Component {
    constructor(){
        super()


        this.state={
            product_name: '',
            image_url: '',
            price: '',
            products:[]
        }
    }
    deleteFn(id){
        axios.delete (`/products/${id}`).then((res)=>{this.setState({products:res.data})})
    }
    
    
    componentDidMount(){
        axios.get('/products').then((res)=>{
        console.log("res",res.data)
        this.setState({
            products:res.data
        })
        console.log("this.products",this.state.products)
    })
    }




    render(){
        let products= this.state.products
        console.log("products", products)
        let mappedProducts = (<h3>'No products'</h3>)
        if (products[0]) {
            mappedProducts = this.state.products.map((product)=> {
                return (
                    <div>
                <h1>{product.product_name}</h1>
                <img className="picture" src={product.image_url} alt="pants"/>
                <h3>{product.price}</h3>
                <button onClick={(id)=> this.deleteFn(id)}>DELETE</button>
                <Link to={`/products/edit/:id`}>EDIT</Link>
                    </div>
                )
            })
        }
        
        return (
            <div>
                {mappedProducts}
            </div>
    )
}
}
export default Product;