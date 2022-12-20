import React from "react";
import slide0 from "../assets/images/splashback/slide0-sm.jpg";
import slide1 from "../assets/images/splashback/slide1-sm.jpg";
import slide2 from "../assets/images/splashback/slide2-sm.jpg";
import slide3 from "../assets/images/splashback/slide3-sm.jpg";
import slide4 from "../assets/images/splashback/slide4-sm.jpg";
import slide5 from "../assets/images/splashback/slide5-sm.jpg";
import slide6 from "../assets/images/splashback/slide6-sm.jpg";
import slide7 from "../assets/images/splashback/slide7-sm.jpg";
import slide8 from "../assets/images/splashback/slide8-sm.jpg";
import slide9 from "../assets/images/splashback/slide9-sm.jpg";
import slide10 from "../assets/images/splashback/slide10-sm.jpg";
import slide11 from "../assets/images/splashback/slide11-sm.jpg";

function Splash() {
  const slideArr = [
    slide0,
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
  ];

  return (
    <div id="splash" className="jumbo-anchor-element back-full-container">
      {slideArr.map((slide, i) => (
        <div className="movieSlide" key={i}>
          <div className="back-container">
            <div
              className={`${
                i % 2 === 0
                  ? "sliding-background-up"
                  : "sliding-background-down"
              }`}
              style={{
                backgroundImage: `url(${slide})`,
              }}
            ></div>
          </div>
        </div>
      ))}
      <div className="jumbo-positioner">
        <div className="jumbo-center">
          <div className="jumbo-content">
            <h1 className="fs-2">WATCHTIME</h1>
            <p className="fs-4">Your movie bucket lists</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Splash;
