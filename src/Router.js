import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ContactBook from './components/ContactBook/ContactBook';
import NavBar from './components/NavBar/NavBar';


const Router = () =>{
    return(
        <BrowserRouter>
            <NavBar/>
            <Route path="/" exact component = {() => <ContactBook page="LIST"/>} />
            <Route path="/add" component = {() => <ContactBook page="ADD"/>} />
        </BrowserRouter>
    )
}
export default Router;