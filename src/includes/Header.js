// https://www.npmjs.com/package/react-head
import React, { useState, useRef  } from "react";
import { NavLink } from 'react-router-dom';
import TopMenu from "./TopMenu";
import TopCart from "./TopCart";
//import {useFocus} from 'react-aria'

function Header() {
  const textInput = useRef(null);
  const [isActive, setActive] = useState(true);
 
  function toggleClass () {
    setActive(!isActive);
    setTimeout(() => textInput.current.focus(), 0);   
  };

//<NavLink className="nav-link" to="/cart">
  return <>
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">

            <NavLink className="navbar-brand" to="/">
              <img src={require('../assets/img/header-logo.png')} alt="Bosa Noga" />
            </NavLink>

            <div className="collapse navbar-collapse" id="navbarMain">


              <TopMenu />

              <div>
                <div className="header-controls-pics">
                  <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={toggleClass} ></div>
                  <TopCart />
                  
                  
                </div>
                <form data-id="search-form" className={"header-controls-search-form form-inline" + (isActive ? " invisible" : "")}>
                  <input className="form-control" placeholder="Поиск" ref={textInput} />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </>

}
export default Header