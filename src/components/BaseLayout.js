import React, { Component } from 'react'

import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {

  render() {
    let navTitle = {
      "fontFamily": "Bellefair",
      "fontSize": "3rem"
    }
    let footerStyle = {
      textAlign: "center",
      height: "60px",
      backgroundColor: "#999",
      paddingTop:"20px",
      position: "fixed",
      left: "0",
      bottom: "0",
      right: "0"
  }
    return(
      <div className="App">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <ul className="nav navbar-nav">
                  <li  style ={navTitle}>
                    <NavLink to="/">RVH</NavLink>
                  </li>
                </ul>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  <li>
                    {/*Link to Home Page*/}
                    <NavLink to="/home"><span>Home</span></NavLink>
                  </li>
                  <li>
                    {/*Link to About Page*/}
                    <NavLink to="/about"><span>About</span></NavLink>
                  </li>
                  <li>
                    {/*Link to Portfolio Page*/}
                    <NavLink to="/portfolio"><span>Portfolio</span></NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {this.props.children}
          <footer style={footerStyle} className="col-xs-12 footer">
            <span>Robert Howington | Holly Springs NC, 27540 | (919) 123-4567</span>
          </footer>
        </div>

    )
  }
}
