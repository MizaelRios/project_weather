"use client";

import { CoordsProvider } from "@/context/coordsContext";
import { WeathersProvider } from "@/context/weathersContext";
import React from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <CoordsProvider>
                <WeathersProvider>
                    {children}
                </WeathersProvider>
            </CoordsProvider>
        </>
    )
};