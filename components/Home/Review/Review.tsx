import React from "react";
import ReviewSlider from "./ReviewSlider"; // Adjust the path as needed

const Review = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mx-auto w-[90%] text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold">
        100+ Pelanggan Mempercayai Kami
      </h1>
      <span className="w-16 h-1  bg-green-600 mx-auto mt-3 block"></span>
      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto mt-10">
        {/* slider */}
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Review;
