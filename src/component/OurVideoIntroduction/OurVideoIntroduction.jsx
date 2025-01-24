import React from "react";
import DisplayIcon from "../../assets/DisplayIcon.png";
import DisplayIcon2 from "../../assets/DisplayIcon2.png"

const OurVideoIntroduction = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 bg-[#2E3A59] md:grid-cols-2 items-center gap-8 px-12 py-10 text-white">
        {/* Left Side Content */}
        <div>
          <h1 className="text-4xl font-bold mb-4 mt-10">
            Our Video Introductions
          </h1>
          <p className="mb-6">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>

          {/* Icon, Title, and Description Section */}
          <div className="flex items-start mt-10">
            <img
              src={DisplayIcon}
              alt="Display Icon"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h1 className="font-bold text-2xl mb-2">Explore Ideas Together</h1>
              <p>
              Engage audience segments and finally create actionable insights. Amplify vertical integration.
              </p>
            </div>
          </div>
          <div className="flex items-start mt-10">
            <img
              src={DisplayIcon2}
              alt="Display Icon"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h1 className="font-bold text-2xl mb-2">Bring those ideas to life</h1>
              <p >
              Engage audience segments and finally create actionable insights. Amplify vertical integration.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative w-full h-[500px]">
  <iframe
    className="w-full h-full rounded-lg shadow-lg"
    src="https://www.youtube.com/embed/hmjYP-kPnP0"
    title="introduction"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

      </div>
    </div>
  );
};

export default OurVideoIntroduction;
