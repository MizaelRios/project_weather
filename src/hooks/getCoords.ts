"use client";

import { Coords } from "@/types";
import { useEffect, useState } from "react";

export const useCoords = () => {
    const coordsInitial: Coords = {latitude: -23.556504852210065, longitude: -46.6409825905939};
    const [coords, setCoords] = useState<Coords | null>(coordsInitial);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const successCallback = (position: GeolocationPosition) => {
                    setCoords(position.coords);
                };

                navigator.geolocation.getCurrentPosition(successCallback);
            } catch (err) {
                console.log('Error occurred when getCoords');
            }
        };
        fetchData();
    }, []);

    return coords;
};