import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link} from "react-router-dom"
import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';

function Header (){
    return (
        <div className="header">
    <h1>
        SHELFIE
    </h1>
    <HashRouter>
        <div>
        <Link to='/'>
            <h3>Dashboard</h3>
        </Link>
        <Link to='/add'>
            <h3>Add Inventory</h3>
        </Link>
        </div>
    </HashRouter>
        </div>

    )
}
export default Header;