import React, { createContext, useState, useEffect, useContext } from "react";
import { useCoords } from "@/hooks/getCoords";
import { Coords, WeatherProps } from "@/types";
import { CoordsContext } from "./coordsContext";
import { fetchWeather } from "@/lib/fetchWeather";

type ContextProps = {
    weathers: WeatherProps | null;
    setWeathers: React.Dispatch<React.SetStateAction<WeatherProps | null>>;
};

export const WeathersContext = createContext<ContextProps>({
    weathers: null,
    setWeathers: () => { }
});

interface Props {
    children: React.ReactNode;
}

export const WeathersProvider = (props: Props) => {
    const coordsContext = useContext(CoordsContext);
    const coords = coordsContext.coords;
    const [weathers, setWeathers] = useState<WeatherProps | null>(null);
    
    useEffect(() => {

        const fetchData = async () => {
            if (coords) {
                const param = `${coords?.latitude}, ${coords?.longitude}`;
                const weatherResp = await fetchWeather(param);
                setWeathers(weatherResp);
                console.info("%c Informações sobre o clima obtidas", "background: #222; color: #bada55");
            } 
        };
        fetchData();
    }, [coords]);

    return (
        <WeathersContext.Provider
            value={{
                weathers,
                setWeathers
            }}
        >
            {props.children}
        </WeathersContext.Provider>
    );
};

export default { WeathersContext, WeathersProvider };