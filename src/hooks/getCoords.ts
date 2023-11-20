"use client";

import { Coords } from "@/types";
import { useEffect, useState } from "react";

export const useCoords = () => {
    const [coords, setCoords] = useState<Coords | null>(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const successCallback = (position: GeolocationPosition) => {
                    setCoords(position.coords);
                };

                navigator.geolocation.getCurrentPosition(successCallback);
                return () => {
                    navigator.geolocation.clearWatch(successCallback);
                };
            } catch (err) {
                console.log('Error occurred when getCoords');
            }
        };
        fetchData();
    }, []);

    return coords;
};