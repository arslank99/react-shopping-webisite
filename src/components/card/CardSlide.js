import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { company } from "../../Data";
const CardSlide = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
    ],
  };
  const sliders = () => {
    return company.map((data) => {
      return (
        <div key={data}>
          <img
            alt="image"
            src={data.img}
            className="img-fluid"
            style={{ display: "flex", alignItems: "center" }}
          />
        </div>
      );
    });
  };
  return (
    <>
      <Slider {...settings}>{sliders()}</Slider>
    </>
  );
};

export default CardSlide;
