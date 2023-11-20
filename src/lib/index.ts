import { FilterProps } from "@/types";

export async function fetchWeather(filters: FilterProps) {
  console.log(filters);

  const latLongSP = "-23.556504852210065, -46.6409825905939";
  return await (await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${filters.latLong || latLongSP}&days=3&alerts=yes&lang=pt`)
  ).json();
}


