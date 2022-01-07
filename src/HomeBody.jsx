import React from "react";
import HomeGadgetsData from "./HomeGadgetsData";
import HomeGadgets from "./HomeGadgets";

const HomeBody = () => {
    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row border-top border-bottom border-dark gy-4">
                            <h3 className="HomeGadgets font-weight-bold ">Home Gadgets</h3>
                                {
                                    HomeGadgetsData.map((val,index)=>{
                                      return(
                                          <HomeGadgets 
                                          img={val.img}
                                          title={val.title}
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

export default HomeBody;