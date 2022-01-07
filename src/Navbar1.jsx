import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar1 = (props) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 mx-auto mt-5 mb-2">
                        <div class="list-group list-group-horizontal-md border border-2 border-dark">
                            {
                                props.navbarText.map((val) => {
                                    return (
                                        <NavLink to={"/"+ val} className="list-group-item list-group-item-action text-center" >{val}</NavLink>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar1;