import React from 'react';

import television from "./images/television.jpg";
import HomeGadgets from "./images/HomeGadgets.jpg";
import watch from "./images/watch.jpg";
import smartphones from "./images/smartphones.jpg"
import laptop from "./images/laptop.jpg"
import desktop from "./images/desktop.jpg"

const HomeSlider = () => {
    return (
        <>
            <div className="container">
                <div className="row-12 py-3">
                    <div className="col-8 mx-auto">
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner h-auto">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src={desktop} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={television}className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={laptop} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
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

export default HomeSlider;