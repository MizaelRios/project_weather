"use client";

import WeatherCard from "./WeatherCard";
import { useEffect, useState } from "react";
import { fetchWeather } from "@/lib/fetchWeather";
import { Forecastday, WeatherProps } from "@/types";
import { useCoords } from "@/hooks/getCoords";

interface WeatherHomeProps {
    city: string;
}

const WeatherHome = ({ city }: WeatherHomeProps) => {
    const coords = useCoords();
    const [weather, setWeather] = useState<WeatherProps | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const param = `${coords?.latitude}, ${coords?.longitude}`;
                const weatherResp = await fetchWeather(param);
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
                    <h2 className='text-black text-xl font-bold'>Oops, não foi possível consultar as informações sobre o tempo.</h2>
                    <p>Erro: {weather?.error?.message}</p>
                </div>
            )}
        </>
    );
};

export default WeatherHome;