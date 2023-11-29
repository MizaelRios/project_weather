"use client";

import WeatherCard from "./WeatherCard";
import { useEffect, useState } from "react";
import { fetchWeather } from "@/lib/fetchWeather";
import { Forecastday, WeatherProps } from "@/types";
import { useCoords } from "@/hooks/getCoords";

const WeatherHome = () => {
    const coords = useCoords();
    const [weather, setWeather] = useState<WeatherProps | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const weatherResp = await fetchWeather({ latitude: coords?.latitude, longitude: coords?.longitude });
                setWeather(weatherResp);
            } catch (err) {
                console.log('Error occurred when fetching weather');
            }
        };

        fetchData();
    }, [coords]);

    return (
        <>
            {weather && weather?.error === undefined ? (
                <section>
                    <div className='home__weathers-wrapper'>
                        {weather?.forecast?.forecastday?.map((forecastday: Forecastday, index) => (
                            <WeatherCard key={index} weatherCurrent={weather?.current} weatherForecastDay={forecastday} />
                        ))}
                    </div>
                </section>
            ) : (
                <div className='home__error-container'>
                    <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
                    <p>{weather?.error?.message}</p>
                </div>
            )}
        </>
    );
};

export default WeatherHome;