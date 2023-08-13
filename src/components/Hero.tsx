"use client";

import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Consulte, busque, veja como está o clima hoje na sua cidade!
        </h1>

        <p className="hero__subtitle">
          De forma simples e fácil veja se vai chover ou fazer sol hoje na sua cidade.
        </p>

        <CustomButton
          title="Consultar sua cidade"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero_sun_lightning_rain.png" fill alt="hero" className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
