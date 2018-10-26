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


    this.state={
      input1:'',
      input2:'',
      input3:''
    }
  }

  render() {
    return (
  <div className="everything">
    <div>
    
      <Dashboard />
      <Form />
      <Header />
    
    </div>

    <div className="inputbox">
      <input className="input1" onChange={e => this.setState({input1: e.target.value})} placeholder='input 1'/>
      <input className="input2" onChange={e => this.setState({input2: e.target.value})} placeholder='input 2'/>
      <input className="input3" onChange={e => this.setState({input3: e.target.value})} placeholder='input 3'/>
    </div>
    <div className="buttons">
      <button className="CancelButton" onClick={()=>(console.log('cancel'))}>Cancel</button>
      <button className="AddButton" onClick={()=>(console.log('add'))}>Add to Inventory</button>
    </div>
  </div>
    )
  }
}

export default App;
