import React from "react";
import LocalStoresCardData from "./LocalStoresCardData";
import LocalStoresCardDetails from "./LocalStoresCardDetails";

const LocalStoresCard = () => {
    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row gy-4 mt-4 ">
                        
                              {
                                   LocalStoresCardData.map((val,index)=>{
                                       return(
                                           <LocalStoresCardDetails 
                                           img={val.img}
                                           title={val.title}
                                           text={val.text}
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

export default LocalStoresCard;