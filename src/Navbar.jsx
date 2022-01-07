import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../src/images/logo.jpg"

const Navbar = () => {
    return (
        <>

            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-12 mx-auto">

                        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary ">
                            <div className="container-fluid">
                                <img src={logo} alt="logo" className="navbar-brand" id="navbar-brand" />
                                <button 
                                className="navbar-toggler" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#navbarSupportedContent" 
                                aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" className="nav-link active pr-5 text-white" id="nav-link" to="/">Home</NavLink>
                                        </li>
                                       <li className="nav-item">
                                            <NavLink activeClassName="menu-active" className="nav-link pr-5 text-white" id="nav-link" to="/ElectronicBrands">Electronic Brands</NavLink>
                                        </li> 
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" className="nav-link pr-5 text-white" id="nav-link" to="/LocalStores">Local Stores</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" className="nav-link pr-5 text-white" id="nav-link" to="/Signup">Signup</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;