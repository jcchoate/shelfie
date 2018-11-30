import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard.js';
import Form from './component/Form/Form.js';
import Header from './component/Header/Header.js';
import { HashRouter, Switch, Route, Link} from "react-router-dom"

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
    const url = this.state.url
    const price = this.state.price
  
    return (
      <div className="everything">
          <Header />
          <HashRouter>
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/add' component={Form}/>
            <Route exact path='/edit/:id' component={Form}/>
        </Switch>
    </HashRouter>
        

        
      </div>
    )
  }
  
}

export default App;
