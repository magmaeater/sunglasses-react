import React from "react";
import "./section-1.css";

const Section1 = () => {
  return (
    <>
      <div className="sec1">
        <div className="header">
          
            <img src={"/sunglasses-logo.png"} className="logo" />
          
          <div className="headings">
            <h1>Trends</h1>
            <h1>Shop by Gender</h1>
            <h1>Accessories</h1>
            <h1>About Us</h1>
            <img src={"/four_dot.png"} alt="" />
          </div>
          <div className="bottom">
            <b className="b">3</b>
            <b className="b1">6</b>
            <b className="b2">0°</b>
            </div>
            <div className='foot'>
                        <div className='embrace'>Embrace Every Angle Of Style</div>
                    </div> 
            </div>
          </div>
    </>
  );
};

export default Section1;
