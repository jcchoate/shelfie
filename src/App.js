import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard.js';
import Form from './component/Form/Form.js';
import Header from './component/Header/Header.js';

// const Dashboard = <this.Dashboard.Dashboard/>
// const Form = <this.Form.Form/>
// const Header = <this.Header.Header/>


class App extends Component {
  constructor(){
    super();


    this.state=
      {
      url:'',
      name:[],
      price:''
      }
    
  }
  

  render() {
    const propstate = this.state.name
    // let namesToDisplay = this.state.name.url.price.filter( (element, index) => {
    //   return element.includes( this.state.filterString );
    // }).map( (element, index) => {
    //   console.log(element);

    return (
      <div className="everything">
      <div>
        <Dashboard propstate={propstate}/>
      </div>
        <div>
        
          <Dashboard />
          <Form />
          <Header />
        
        </div>

        <div className="inputbox">
          <input className="url" onChange={e => this.setState({url: e.target.value})} placeholder='URL'/>
          <input className="name" onChange={e => this.setState({name: e.target.value})} placeholder='Name'/>
          <input className="price" onChange={e => this.setState({price: e.target.value})} placeholder='Price'/>
        </div>
        <div className="buttons">
          <button className="CancelButton" onClick={()=>(console.log('cancel'))}>Cancel</button>
          <button className="AddButton" onClick={()=>(console.log('add'))}>Add to Inventory</button>
          {/* {namesToDisplay} */}
        </div>
      </div>
    )
  }
  
}

export default App;
