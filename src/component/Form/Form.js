import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Switch, Route, Link} from "react-router-dom"



class Form extends Component {

    constructor(){
        super()

        this.state=[{
            image_url: '',
            product_name:'',
            price: '',
            product:[]
        }]
    }
    add(){
        axios.post('/products', 
        {
            product_name:this.state.product_name,
            image_url:this.state.image_url,
            price:this.state.price
        })
        .then((res)=>{this.setState({product:res.data, product_name:'', image_url:'',price:''})})
    }
    edit(id){
        let edited = {
            image_url: this.state.image_url,
            product_name: this.state.product_name,
            price: this.state.price
        }
        axios.put(`/products/${id}`,edited).then(res => {
            this.setState({
                product: res.data
            })
        })
    }
    
    render() {
        return (<div className="form">
            <div className="inputbox">
          <input className="url" onChange={e => this.setState({image_url: e.target.value})} placeholder='URL'/>
          <input className="name" onChange={e => this.setState({product_name: e.target.value})} placeholder='Name'/>
          <input className="price" onChange={e => this.setState({price: e.target.value})} placeholder='Price'/>
        </div>
        <HashRouter>
        <div className="buttons">
          <Link to='/' className="CancelButton">Cancel</Link>
          <button className="AddButton" onClick={()=>this.add()}>Add to Inventory</button>
        </div>
        </HashRouter>
        </div>
        )
    }
}
export default Form;