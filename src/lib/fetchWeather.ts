import { FilterProps } from "@/types";

export async function fetchWeather(param: string) {
  return await (await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_WEATHER}/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${param}&days=3&alerts=yes&lang=pt`)
  ).json();
}


