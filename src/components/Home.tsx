"use client";

import SearchBar from '@/components/Searchbar';
import WeatherHome from '@/components/WeatherHome';
import { City } from '@/types';
import { useState } from 'react';

const Home = () => {
  const [city, setCity] = useState<City>();

  return (
    <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>Cidades</h1>
        <p>Pesquisa rápida</p>
      </div>
      <div className='home__filters'>
        <SearchBar
          city={city}
          setCity={setCity} />
        {/* <div className='home__filter-container'>
          </div> */}
      </div>
      <WeatherHome city={city?.nome ?? ""} />
    </div>
  );
};
export default Home;
