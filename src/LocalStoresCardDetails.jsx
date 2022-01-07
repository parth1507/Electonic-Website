import React from "react";
import { NavLink } from "react-router-dom";

const LocalStoresCardDetails = (props) => {
    return (
        <>
            <div className="col-md-3 col-10 mx-auto mb-4 ">
                <div className="card card-local" id="card-local" >
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text ">{props.text}</p>
                        <div className="card-link d-flex flex-row ms-md-3">
                            <NavLink to="#" className="btn btn-primary me-4" >Go to Location</NavLink>
                            <NavLink to="#" className="btn btn-primary ">See products</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocalStoresCardDetails;