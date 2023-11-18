import Hero from '@/components/Hero';
import WeatherCard from '@/components/WeatherCard';
import { Forecastday, HomeProps } from '@/types';
import { fetchWeather, formatDateAndGetDayOfTheWeek } from '@/utils';

export default async function Home() {
  const weather = await fetchWeather({latLong: undefined});

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Cidades</h1>
          <p>Pesquisa rápida</p>
        </div>

        <div className='home__filters'>
          <div> Search</div>
        </div>

        {weather ? (
          <section>
            <div className='home__weathers-wrapper'>
              {weather?.forecast?.forecastday?.map((forecastday: Forecastday) => (
                <WeatherCard weatherCurrent={weather?.current} weatherForecastDay={forecastday} />
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{weather?.Alerts?.alert}</p>
          </div>
        )}

      </div>
    </main>
  );
}
