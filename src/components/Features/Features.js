import React from "react";
import { BsStars } from "react-icons/bs";
import feetbg from "../../assets/featbg.png";

const Features = () => {
  return (
    <div className="Features">
      <div className="f-flex">
        <div className="f-title">
          <h1>
            Why Choose Our <BsStars style={{ color: "#fc8250" }} /> <br />
            Services?
          </h1>
        </div>
        <div className="f-title">
          <p>
            Parents always have a hard time during the selection process with
            the pressure of transitioning from lower primary to junior secondary
            being a pain. Save time and money by using the system to directly
            access the schools without travelling to them.
          </p>
        </div>

        {/* image */}
        <div className="f-img">
          <img src={feetbg} alt="feetbg"  width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Features;
