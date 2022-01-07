import React from "react";
import CardDetails from "./CardDetails";
// import HomeGadgetsData from "./HomeGadgetsData";

const Card = (props) => {
    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row border-top border-bottom border-dark gy-4">
                        <h3 className="HomeGadgets font-weight-bold ">{props.data.heading}</h3>
                        {

                                    props.data.type.map((val,index)=>{
                                      return(
                                          <CardDetails 
                                          img={val.img}
                                          title={val.title}
                                          buttonText={val.buttonText}
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

export default Card;