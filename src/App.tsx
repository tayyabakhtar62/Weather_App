import React, { useEffect, useState } from 'react';
import './App.css';
import TopBanner from './components/TopBanner'
import SearchSection from './components/SearchSection'
import Forecast from './components/ForeCast';
import getFormattedWeatherData from './services/weatherServices';
import TimeLocation from './components/TImeLocation';
import TemperatureDetails from './components/TemperatureDetails';

function App() {

  const [query, setQuery] = useState({ q: "Islamabad" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-full mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 from-green-500 to-blue-700">
      <TopBanner />
      <SearchSection setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeLocation weather={weather} />
          <TemperatureDetails weather={weather} />
          <Forecast title="daily forecast" items={weather.daily} />
          <Forecast title="hourly forecast" items={weather.hourly} />
        </div>
      )}
    </div>
  );
}

export default App;
