import { MouseEventHandler } from "react";
import { User } from "next-auth";

export type UserSession =
  | (User & {
    id: string;
  })
  | undefined;

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface FilterProps {
  latitude?: number
  longitude?: number
}

export interface WeatherProps {
  location: Location
  current: Current
  forecast: Forecast
  alerts: Alerts
  error: Error
}

export interface Location {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

export interface Current {
  last_updated_epoch: number
  last_updated: string
  temp_c: number
  temp_f: number
  is_day: number
  condition: Condition
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  vis_km: number
  vis_miles: number
  uv: number
  gust_mph: number
  gust_kph: number
}

export interface Condition {
  text: string
  icon: string
  code: number
}

export interface Forecast {
  forecastday: Forecastday[]
}

export interface Forecastday {
  date: string
  date_epoch: number
  day: Day
  astro: Astro
  hour: Hour[]
}

export interface Day {
  maxtemp_c: number
  maxtemp_f: number
  mintemp_c: number
  mintemp_f: number
  avgtemp_c: number
  avgtemp_f: number
  maxwind_mph: number
  maxwind_kph: number
  totalprecip_mm: number
  totalprecip_in: number
  totalsnow_cm: number
  avgvis_km: number
  avgvis_miles: number
  avghumidity: number
  daily_will_it_rain: number
  daily_chance_of_rain: number
  daily_will_it_snow: number
  daily_chance_of_snow: number
  condition: Condition2
  uv: number
}

export interface Condition2 {
  text: string
  icon: string
  code: number
}

export interface Astro {
  sunrise: string
  sunset: string
  moonrise: string
  moonset: string
  moon_phase: string
  moon_illumination: number
  is_moon_up: number
  is_sun_up: number
}

export interface Hour {
  time_epoch: number
  time: string
  temp_c: number
  temp_f: number
  is_day: number
  condition: Condition3
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  windchill_c: number
  windchill_f: number
  heatindex_c: number
  heatindex_f: number
  dewpoint_c: number
  dewpoint_f: number
  will_it_rain: number
  chance_of_rain: number
  will_it_snow: number
  chance_of_snow: number
  vis_km: number
  vis_miles: number
  gust_mph: number
  gust_kph: number
  uv: number
}

export interface Condition3 {
  text: string
  icon: string
  code: number
}

export interface Alerts {
  alert: any[]
}

export interface Error {
  code: number
  message: string
}

export interface Coords {
  latitude: number
  longitude: number
}

export interface SearchStatesProps {
  stateSelected?: State;
  setState: (state: State) => void;
}

export interface SearchCityProps {
  uf: string
  citySelected?: City
  setCity: (state: City) => void;
}

export interface SearchBarProps {
  city?: City
  setCity: (state: City) => void;
}

export type States = State[]

export interface State {
  id: number
  sigla: string
  nome: string
  regiao: Regiao
}

export interface Regiao {
  id: number
  sigla: string
  nome: string
}

export type Citys = City[]

export interface City {
  id: number
  nome: string
  microrregiao: Microrregiao
  "regiao-imediata": RegiaoImediata
}

export interface Microrregiao {
  id: number
  nome: string
  mesorregiao: Mesorregiao
}

export interface Mesorregiao {
  id: number
  nome: string
  UF: Uf
}

export interface Uf {
  id: number
  sigla: string
  nome: string
  regiao: Regiao
}

export interface Regiao {
  id: number
  sigla: string
  nome: string
}

export interface RegiaoImediata {
  id: number
  nome: string
  "regiao-intermediaria": RegiaoIntermediaria
}

export interface RegiaoIntermediaria {
  id: number
  nome: string
  UF: Uf2
}

export interface Uf2 {
  id: number
  sigla: string
  nome: string
  regiao: Regiao2
}

export interface Regiao2 {
  id: number
  sigla: string
  nome: string
}
