import React from "react";
import { NavLink } from "react-router-dom";



const LocalStoreNavbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 mx-auto col-lg-4 mt-5 ">
                        <div className="list-group border border-2 border-dark list-group-horizontal ">
                            <NavLink to="#" className="list-group-item list-group-item-action bg-info text-white ">Location</NavLink>
                            <NavLink to="#" className="list-group-item list-group-item-action bg-info text-white">Search</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocalStoreNavbar;
