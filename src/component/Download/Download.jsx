import React from "react";
import banner from "../../assets/banner.png";
import Phone from "../../assets/Phone.png";

const Download = () => {
  return (
    <div className="w-full mt-10 relative">
      <div>
        <img src={banner} className="w-full h-auto" alt="Banner" />
      </div>

      <div className="absolute top-1/2 right-16 transform -translate-y-1/2 z-20">
        <img
          src={Phone}
          className="w-40 sm:w-60 md:w-72 lg:w-80 h-auto"
          alt="Phone 2"
        />
      </div>
    </div>
  );
};

export default Download;
