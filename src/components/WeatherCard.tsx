"use client";

import Image from "next/image";
import { compareDateWithCurrent, formatDateAndGetDayOfTheWeek, formatDateForCard } from "@/utils/date";
import { generateImageUrl } from "@/utils/generateUrlImage";
import { Current, Forecastday } from "@/types";
import { useState } from "react";
import CustomButton from "./ui/CustomButton";
import WeatherCardDetails from "./WeatherCardDetails";

interface WeatherCardProps {
  weatherCurrent: Current;
  weatherForecastDay: Forecastday;
}

const WeatherCard = ({ weatherCurrent, weatherForecastDay }: WeatherCardProps) => {
  const weatherForecastDayFilter = weatherForecastDay?.hour?.find(item => compareDateWithCurrent(item.time));
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="weather-card group">
      <div className="weather-card__content">
        <h2 className="weather-card__content-title-day">
          {formatDateAndGetDayOfTheWeek(weatherForecastDayFilter?.time ?? "")}
        </h2>
      </div>

      <div className="weather-card__content">
        <span className='font-medium'>
          {formatDateForCard(weatherForecastDayFilter?.time ?? "")}
        </span>
      </div>

      <div className="weather-card__content-temp">
        <h1 className="weather-card__content-title-temp" >{weatherForecastDayFilter?.temp_c ?? 0} <span>°</span></h1>
      </div>

      <div className='relative w-full h-20 my-2 object-contain flex items-center justify-center'>
        <Image src={generateImageUrl(weatherForecastDayFilter?.condition.icon ?? "")}
          alt='Ícone Clima'
          priority
          className='object-contain'
          width={50} height={50} />
        <span className="weather-card__content-title-condition">{weatherForecastDayFilter?.condition.text ?? ""}</span>
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
        <div className="weather-card__btn-container">
          <CustomButton
            title='Mais detalhes'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <WeatherCardDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} weatherForecastDay={weatherForecastDayFilter} />
    </div>
  );
};

export default WeatherCard;
