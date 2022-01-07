import React from "react";
import { NavLink } from "react-router-dom";

const CardDetails = (props) => {
    return (
        <>
            <div className="col-md-3 col-10 mx-auto mb-4 " id="CardDetails">
                <h3 className="HomeGadgets font-weight-bold ">{props.heading}</h3>
                <div className="card " id="card">
                    <img src={props.img} className="card-img-top " alt={props.img} />
                    <div class="card-body ">
                        <h4 class="card-title ">{props.title}</h4>
                        <p class="card-text text-muted ">{props.features}</p>
                        <h4 className="card-price">{props.price}</h4>
                        <NavLink to="#" className="btn btn-primary ">{props.buttonText}</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetails;