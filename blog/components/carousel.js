import React from "react";
import Slider from "react-slick";
import styles from '/styles/homelayout.module.css';

export default function Carousel() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        <div className={styles.slide}>
          <img src="../images/dog1.jpg" alt="Description" />
          {/*<h3>14.1.2024</h3>
          <h2>Rye bread mittens</h2>*/}
        </div>
        <div className={styles.slide}>
        <img src="../images/mitts1.jpg" alt="Description" />
        </div>
        <div className={styles.slide}>
          <img src="../images/glove.jpeg" alt="Description" />
        </div>
        <div className={styles.slide}>
          <img src="../images/dragon.jpeg" alt="Description" />
        </div>
        <div className={styles.slide}>
          <img src="../images/dog1.jpg" alt="Description" />
        </div>
        <div className={styles.slide}>
          <img src="../images/glove.jpeg" alt="Description" />
        </div>
      </Slider>
    );
  }
  
  