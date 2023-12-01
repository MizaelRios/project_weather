"use client";

import CustomButton from "./ui/CustomButton";
import Image from "next/image";
import WeatherCardSimplified from "./WeatherCardSimplified";
import { WeathersContext } from "@/context/weathersContext";
import { useContext } from "react";
import { returnImageHero } from "@/utils/returnImageHero";

const Hero = () => {
  const weathersContext = useContext(WeathersContext);
  const weathers = weathersContext.weathers;

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
          Qual o clima hoje na sua cidade?
        </h1>

        <p className="hero__subtitle">
          De forma simples e fácil veja a previsão do tempo.
        </p>

        <CustomButton
          title="Consultar cidade"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image-card">
          {weathers && <WeatherCardSimplified {...weathers} />}
        </div>
        <div className="hero__image">
          <Image src={returnImageHero(weathers?.current?.condition?.text ?? "", weathers?.current?.condition?.icon ?? "")} fill alt="hero" className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
