import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Footer from "./component/Footer/Footer"
import About from "./Pages/About/About";
import OurServices from "./Pages/OurServices/OurServices";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
};

export default App;
