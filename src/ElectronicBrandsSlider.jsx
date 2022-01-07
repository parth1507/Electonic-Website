import React from "react";
import voltas from "../src/images/voltas.jpg";
import samsung from "../src/images/samsung.jpg";
import iphone from "../src/images/iphone.png";
import boAt from "../src/images/boAt.jpeg";
import canon from "../src/images/canon.jpeg";


const ElectronicBrandsSlider = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-4 mt-5 mx-auto">
                        <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                            <div className="carousel-inner h-auto">
                                <div className="carousel-item active">
                                    <img src={boAt} className="d-block w-100" alt={boAt} />
                                </div>
                                <div className="carousel-item">
                                    <img src={canon} className="d-block w-100" alt={canon} />
                                </div>
                                <div className="carousel-item">
                                    <img src={iphone} className="d-block w-100" alt={iphone} />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ElectronicBrandsSlider;