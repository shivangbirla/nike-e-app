import React from "react";
import nikevideo from "../assets/nike-video-1.mp4";

const Hero = () => {
  return (
    <>
      <div className="mt-[15vh] nike-container md:mt-[120px]">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playInline={true}
          className="cursor-pointer"
        >
          <source type="video/mp4" src={nikevideo} />
        </video>
        <div className="flex items-center">
          <h3 className="text-[24px] mt-5 mb-2 mx-auto">Summer To Shine</h3>
        </div>
        <div className="flex items-center ">
          <h1 className="text-[48px] font-bold mx-auto mt-2 mb-4">
            YOUR SEASON OF BRILLIANCE
          </h1>
        </div>
        <div className="flex items-center">
          <p className="mx-auto">
            Move together in festival and dance looks as individual as the
            sound.
          </p>
        </div>
        <div className="flex items-center">
          <button className="button-theme mx-auto mt-5">Shop</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
