import React from "react";
import Slider from "react-slick";

export default function Carousel() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: true,
      swipeToSlide: true
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>Rye bread mittens<br />These were made as a gift</h3>
        </div>
        <div>
          <h3>Cow plushie</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
  
  