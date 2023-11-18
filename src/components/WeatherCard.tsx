"use client";

import Image from "next/image";
import { Current, Forecastday } from "@/types";
import { formatDateAndGetDayOfTheWeek, generateCarImageUrl } from "@/utils";

interface WeatherCardProps {
  weatherCurrent: Current;
  weatherForecastDay: Forecastday;
}

const WeatherCard = ({ weatherCurrent, weatherForecastDay}: WeatherCardProps) => {

  return (
    <div className="weather-card group">
      <div className="weather-card__content">
        <h2 className="weather-card__content-title">
          {formatDateAndGetDayOfTheWeek(weatherForecastDay.date)}
        </h2>
      </div>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={generateCarImageUrl(weatherCurrent.condition.icon)} 
        alt='Ícone Clima' 
        priority 
        className='object-contain'
        width={50} height={50} />
        <h2 className="weather-card__content-title">{weatherCurrent.condition.text}</h2>
      </div>

      <div className='relative flex w-full mt-2'>
        <h1 className="weather-card__content-title" >{weatherCurrent.temp_c}</h1>
      </div>
    </div>
  );
};

export default WeatherCard;
