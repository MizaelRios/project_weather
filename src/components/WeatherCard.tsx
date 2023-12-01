"use client";

import Image from "next/image";
import { formatDate, formatDateAndGetDayOfTheWeek } from "@/utils/formatDate";
import { generateImageUrl } from "@/utils/generateUrlImage";
import { Current, Forecastday } from "@/types";

interface WeatherCardProps {
  weatherCurrent: Current;
  weatherForecastDay: Forecastday;
}

const WeatherCard = ({ weatherCurrent, weatherForecastDay }: WeatherCardProps) => {

  return (
    <div className="weather-card group">
      <div className="weather-card__content">
        <h2 className="weather-card__content-title-day">
          {formatDateAndGetDayOfTheWeek(weatherForecastDay.date)}
        </h2>
      </div>

      <div className="weather-card__content">
        <span className='font-medium'>
          {formatDate(weatherForecastDay.date)}
        </span>
      </div>

      <div className="weather-card__content-temp">
        <h1 className="weather-card__content-title-temp" >{weatherCurrent.temp_c} <span>°</span></h1>
      </div>

      <div className='relative w-full h-20 my-2 object-contain flex items-center justify-center'>
        <Image src={generateImageUrl(weatherCurrent.condition.icon)}
          alt='Ícone Clima'
          priority
          className='object-contain'
          width={50} height={50} />
        <span className="weather-card__content-title-condition">{weatherCurrent.condition.text}</span>
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-[14px] leading-[17px]'>
              {weatherForecastDay.day.maxtemp_c}
              <span>° máx</span>
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-[14px] leading-[17px]'>{weatherForecastDay.day.mintemp_c}
              <span>° min</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
