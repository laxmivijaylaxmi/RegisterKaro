import React from "react";
import oracle from "../../assets/oracle.png";
import morpheus from "../../assets/morpheus.png";
import samsung from "../../assets/samsung.png";
import monday from "../../assets/monday.png";
import segment from "../../assets/segment.png";

const CompanyReview = () => {
  return (
    <div className="flex flex-col items-center mt-16 px-4 text-center p-10 ">
  
      <h1 className="text-2xl lg:text-2xl font-bold mb-8">
        Trusted by Over 100+ Startups and Freelance Businesses
      </h1>


      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center w-full max-w-5xl">
        <img src={oracle} alt="Oracle Logo" className="w-22 h-auto mx-auto" />
        <img src={morpheus} alt="Morpheus Logo" className="w-22 h-auto mx-auto" />
        <img src={morpheus} alt="Morpheus Logo" className="w-22 h-auto mx-auto" />
        <img src={samsung} alt="Samsung Logo" className="w-22 h-auto mx-auto" />
        <img src={monday} alt="Monday Logo" className="w-22 h-auto mx-auto" />
        <img src={segment} alt="Segment Logo" className="w-22 h-auto mx-auto" />
      </div>
    </div>
  );
};

export default CompanyReview;
