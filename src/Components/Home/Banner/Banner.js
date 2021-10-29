import React from "react";
import { Carousel } from "react-bootstrap";
import BannerImg from "../../../Media/tour-in-europe.png";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-img"
          src={BannerImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="text-lg">Great Trip for Solo Travellers</h1>
          <p className="fs-4">
            Since 2015, we’ve helped more than 500,000 people of all ages enjoy
            the best outdoor experience.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
