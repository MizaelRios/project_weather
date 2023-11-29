import { FilterProps } from "@/types";

export async function fetchWeather(filters: FilterProps) {
  return await (await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_WEATHER}/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${filters.latitude}, ${filters.longitude}&days=3&alerts=yes&lang=pt`)
  ).json();
}


