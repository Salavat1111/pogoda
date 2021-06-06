import React from 'react';
import "./index.css";
import App from './App';
import About from './About';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import { useState } from 'react';


const AppZag = () => {
 
    const [open, setOpen] = useState(false)


       return(
        <BrowserRouter>
        <div className={open ? 'open activ' : 'open'}>
         <div className="body1">
           <div className="header__menu z__index-3">
           <NavLink to="/" className="header__link size1 ">Погода</NavLink>
           <NavLink to="/1" className="header__link size1 ">Обо мне</NavLink>
           <a  onClick={() => (setOpen(!open) ) }>Сменить тему</a>
           </div>
           <Route exact path="/" component={App}/>
           <Route exact path="/1" component={About}/>
            </div>
            </div>
            </BrowserRouter>
       )
    }

export default AppZag;