import React from "react";
import HomeDetails from "./HomeDetails";
import HomeData from "./HomeData";


const HomeCard = () => {
    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                HomeData.map((val,index)=>{
                                    return(
                                        <HomeDetails 
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        features={val.features}
                                        price={val.price}
                                        key={index}
                                        />
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

export default HomeCard;