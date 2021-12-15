import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";


export default function navbar() {
    return (

<div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
            <Link className="navbar-brand" to="#page-top">Grupo 10</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="registro">Registrarse</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="login">Iniciar sesion</Link></li>
                          
                    </ul>
                </div>                
            </div>
        </nav>
    </div>
    
    

    );
        
}