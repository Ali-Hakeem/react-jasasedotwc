"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slideToSide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slideToSide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slideToSide: 1,
  },
};

const ReviewSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
    >
      <ReviewCard
        name="Rudiyatna"
        role="Ceper, Klaten"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iste quos
        ullam perspiciatis sit, maxime dolore impedit! Quia fugiat, voluptates
        quas soluta obcaecati quisquam, doloribus nobis maiores totam aut
        corrupti."
      />
      <ReviewCard
        name="Purwanto"
        role="Jebres, Solo"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure beatae illum, sequi voluptas labore repellat minima corrupti optio ipsa placeat, error nisi officia! Error, atque accusamus autem quisquam exercitationem dicta!"
      />
      <ReviewCard
        name="Tutik"
        role="Banjarsari, Solo"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit accusamus ipsam commodi nisi ipsa ad earum tenetur dolorum quod reprehenderit culpa autem esse aspernatur soluta, ab laboriosam. Consequatur, corporis neque?"
      />

      <ReviewCard
        name="Waluyo"
        role="Gemolong, Sragen"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam veritatis alias quod quaerat aliquid reprehenderit harum sint obcaecati, ipsa explicabo? Impedit fugit, ut corrupti odit hic eum sed expedita veniam?"
      />
    </Carousel>
  );
};

export default ReviewSlider;
