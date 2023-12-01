"use client";

import Image from "next/image";
import { images } from "@/constants";
import { WeatherProps } from "@/types";

const WeatherCardSimplified = ({ ...weather }: WeatherProps) => {
  return (
    <div className="weather-card-simplified group">
      <div className='relative w-full h-12 object-contain flex items-center justify-center gap-2'>
        <Image src={images.location} alt='logo' width={13} height={13} className='object-contain' />
        <span className="weather-card-simplified__content-title-city">
          {weather?.location?.name}
        </span>
      </div>
      <div className="weather-card-simplified__content-temp">
        <h1 className="weather-card-simplified__content-title-temp" >
          {weather?.current?.temp_c} <span>°</span>
        </h1>
      </div>
      <div className="weather-card-simplified__content">
        <h2 className="weather-card-simplified__content-title-condition">
          {weather?.current?.condition?.text}
        </h2>
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='weather-card-simplified__temp'>
            <p className='weather-card-simplified__temp-text'>
              {weather?.forecast?.forecastday[0]?.day?.maxtemp_c}
              <span>° máx</span>
            </p>
          </div>
          <div className='weather-card-simplified__temp'>
            <p className='weather-card-simplified__temp-text'>
              {weather?.forecast?.forecastday[0]?.day?.mintemp_c}
              <span>° min</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCardSimplified;
