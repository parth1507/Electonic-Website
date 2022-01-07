import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import ElectronicBrands from './ElectronicBrands';
import LocalStores from './LocalStores';
import Signup from './Signup';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router';

const Service = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/ElectronicBrands" component={ElectronicBrands} />
                <Route exact path="/LocalStores" component={LocalStores} />
                <Route exact path="/Signup" component={Signup} />
                <Redirect to="/" />
            </Switch>


        </>
    );
};

export default Service;