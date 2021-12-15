import './App.css';
import React, { Component } from "react";

import {
    BrowserRouter,
    Switch,
    Route,
    Navigate,
    Link,
    NavLink
  } from "react-router-dom";

function App() {
  return (
    <router>
    <div>
      <body id="page-top">
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
        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5">
                    <h1 className="masthead-heading mb-0">COPEAJES</h1>
                    <h2 className="masthead-subheading mb-0">Te lleva a tu destino</h2>
                    <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Mostrar Mas</a>
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>
        <section id="scroll">
            <div className="container px-5">
                <div className="text-center">
                <div className="p-5">
                  </div><h2 className="display-5">Categoria de cobro</h2>
                    <div className="text-center">
                        <div className="p-5"><img className="img-rounded" src="assets/img/05.jpg" alt="...." width="700" height="400" /></div>
                    </div>                               
                </div>
            </div>
        </section>
        <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/02.jpg" alt="..." /></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <h2 className="display-4">We salute you!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/04.jpeg" alt="..." /></div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">Let there be rock!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
        <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
            </div>
            <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN"></form>
            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
            <div className="form-floating mb-3">
                    <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                        <label for="email">Email address</label>
                            <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
            </div>
            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
            <div className="d-none" ><div className="text-center text-danger mb-3"></div></div>
            <button className="btn btn-primary btn-xl enabled" id="submitButton" type="submit">Enviar</button>
            <div className="p-3"></div>                    
                            
                
                
                        </div>
                    </div>
                
            
        </section>
        
        
        <footer className="py-5 bg-black">
            <div className="container px-5"><p className="m-0 text-center text-white small">Copyright &copy; grupo 10</p></div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
    </body>
    </div>
    </router>
  );
}


export default App;
