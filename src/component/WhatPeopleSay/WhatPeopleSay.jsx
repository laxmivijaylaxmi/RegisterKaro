import React from "react";
import { motion } from "framer-motion"; 
import feedback1 from "../../assets/feedback-1.png";
import feedback2 from "../../assets/feedback-2.png";
import feedback3 from "../../assets/feedback-3.png";
import feedback4 from "../../assets/feedback-4.jpg";
import feedback5 from "../../assets/feedback-5.jpg";
import "./WhatPeopleSay.css";


const feedbacks = [
    {
      image: feedback1,
      text: "“RegisterKaro.com provides an exceptional user experience! The process is seamless and easy to navigate. ”",
    },
    {
      image: feedback2,
      text: "“I’ve used RegisterKaro.com multiple times, and each time the registration process is smooth and hassle-free. Great platform!”",
    },
    {
      image: feedback3,
      text: "“RegisterKaro.com has made signing up for services so much easier. The user-friendly interface and quick process are impressive! I’m a repeat user and always recommend it.”",
    },
    {
      image: feedback4,
      text: "“I’ve had a great experience with RegisterKaro.com. The website is fast, reliable, and simple to use. I highly recommend it to businesses looking for an efficient registration solution.”",
    },
    {
      image: feedback5,
      text: "“RegisterKaro.com is the best platform for quick and reliable registrations. I’ve used it for multiple projects, and the platform has never failed to deliver.!”",
    },
    
];

  
  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
  };

const WhatPeopleSay = () => {
  return (
  
    <>
     <div className="Our-customer bg-[rgba(46,60,110,0.9)] ">
      <h2 className="text-left px-5 text-white">What People's Say</h2>
      <div className="customer">
        {feedbacks.map((feedback, index) => (
          <motion.div
            key={index}
            className="customer-card"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <img src={feedback.image}  alt="feedback" className="feedback-image" />
            <p className="feedback-text">{feedback.text}</p>

          </motion.div>
        ))}
      </div>
    </div>

    </>
  );
};

export default WhatPeopleSay;


