import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import MultiToursDiscount from "../MultiToursDiscount/MultiToursDiscount";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="home pb-4">
      <Banner></Banner>
      <Services></Services>
      <MultiToursDiscount></MultiToursDiscount>
      <Contact></Contact>
    </div>
  );
};

export default Home;
