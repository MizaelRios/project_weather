import React, { createContext, useState, useEffect } from "react";
import { useCoords } from "@/hooks/getCoords";
import { Coords } from "@/types";

type ContextProps = {
    coords: Coords | null;
    setCoords: React.Dispatch<React.SetStateAction<Coords | null>>;
};

export const CoordsContext = createContext<ContextProps>({
    coords: null,
    setCoords: () => { }
});

interface Props {
    children: React.ReactNode;
}

export const CoordsProvider = (props: Props) => {
    const coordsGeolocation = useCoords();
    const [coords, setCoords] = useState<Coords | null>(null);

    useEffect(() => {

        const fetchData = async () => {
            if (coordsGeolocation) {
                setCoords(coordsGeolocation);
                console.info("%c Coordenadas obtidas", "background: #222; color: #bada55");
            }
        };
        fetchData();
    }, [coordsGeolocation]);

    return (
        <CoordsContext.Provider
            value={{
                coords,
                setCoords
            }}
        >
            {props.children}
        </CoordsContext.Provider>
    );
};

export default { CoordsContext, CoordsProvider };