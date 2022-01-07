import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const HomeDetails = (props) => {
    return (
        <>

            <div className="col-md-3 col-10 mx-auto">
                <div className="card h-100" >
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div class="card-body " >
                        <h5 class="card-title font-weight-bold">{props.title}</h5>
                        <p class="card-text text-muted " >{props.features}</p>
                        <h4 className="card-price">{props.price}</h4>
                        <NavLink to="#" className="btn btn-primary d-flex flex-column justify-content-center" id="btn">Shop Now</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeDetails;