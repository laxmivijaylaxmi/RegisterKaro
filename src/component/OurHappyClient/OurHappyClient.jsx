import React from "react";
import Round1 from "../../assets/Round1.png";
import Round2 from "../../assets/Round2.png";
import Round3 from "../../assets/Round3.png";
import Round4 from "../../assets/Round4.png";
import Round5 from "../../assets/Round5.png";
import Round6 from "../../assets/Round6.png";
import Round7 from "../../assets/Round7.png";
import Round8 from "../../assets/Round8.png";
import Round9 from "../../assets/Round9.png";
import Round10 from "../../assets/Round10.png";
import Round11 from "../../assets/Round11.png";
import Round12 from "../../assets/Round12.png";
import Round13 from "../../assets/Round13.png";
import Round14 from "../../assets/Round14.png";
import Round15 from "../../assets/Round15.png";
import EmailIcon from "../../assets/EmailIcon.png";
import FormIcon from "../../assets/FormIcon.png";
import FormIcon2 from "../../assets/FormIcon2.png";
import FormIcon3 from "../../assets/FormIcon3.png";

// Array of images for "Our Happy Clients"
const images = [
  Round1,
  Round2,
  Round3,
  Round4,
  Round5,
  Round6,
  Round7,
  Round8,
  Round9,
  Round10,
  Round11,
  Round12,
  Round13,
  Round14,
  Round15,
];

// Generate random positions for images
const getRandomPosition = () => {
  const top = Math.random() * 90; // Restrict to 90% height
  const left = Math.random() * 90; // Restrict to 90% width
  return { top: `${top}%`, left: `${left}%` };
};

// Steps data for easy scalability
const steps = [
  {
    icon: FormIcon3,
    title: "Fill up Application Form",
    bgColor: "bg-red-500",
  },
  {
    icon: FormIcon,
    title: "Make Online Payment",
    bgColor: "bg-green-500",
  },
  {
    icon: FormIcon2,
    title: "Executive will Process Application",
    bgColor: "bg-blue-500",
  },
  {
    icon: EmailIcon,
    title: "Get Confirm Mail",
    bgColor: "bg-gray-500",
  },
];

const OurHappyClient = () => {
  return (
    <>
      {/* Section 1: Our Happy Clients */}
      <div className="relative flex flex-col justify-center items-center mt-10 p-10 h-[500px] overflow-hidden">
        {/* Title and Description */}
        <div className="text-center z-10">
          <h1 className="text-4xl font-bold">Our Happy Clients</h1>
          <p className="text-gray-500 mt-4">
            Professionally cultivate one-to-one customer service with robust
            <br></br>
            ideas. Dynamically innovate resource-leveling customer service for
            state-of-the-art customer service.
          </p>
        </div>

        {/* Randomly Positioned Images */}
        <div className="absolute inset-0">
          {images.map((image, index) => {
            const position = getRandomPosition();
            return (
              <img
                key={index}
                src={image}
                alt={`Client ${index + 1}`}
                className="absolute w-16 h-16 rounded-full transition-transform transform hover:scale-110"
                style={{ top: position.top, left: position.left }}
              />
            );
          })}
        </div>
      </div>

      {/* Section 2: Steps */}
      <div className="flex flex-wrap justify-between gap-6 p-6 bg-orange-500">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start mt-6 w-full sm:w-[48%] lg:w-[23%]"
          >
            <div
              className={`${step.bgColor} w-12 h-12 rounded-full flex items-center justify-center`}
            >
              <img src={step.icon} alt="Step Icon" className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h1 className="font-bold text-xl mb-2">{step.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurHappyClient;
