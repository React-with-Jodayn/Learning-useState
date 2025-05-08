import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
export default function LocationWeather() {
  const apiKey: string = import.meta.env.VITE_WEATHER_API_KEY;
  const urlBase: string = import.meta.env.VITE_WEATHER_API_URL_BASE;
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    Temp: 0,
    seaLevel: 0,
    description: "",
  });

  useEffect(() => {
    if (!city) return;
    axios
      .get(`${urlBase}?q=${city}&appid=${apiKey}`)
      .then((response) => {
        const weatherTemp = {
          Temp: response.data.main.temp,
          seaLevel: response.data.main.sea_level,
          description: response.data.weather[0].description,
        };
        setWeather(weatherTemp);
        localStorage.setItem("Weather", JSON.stringify(weatherTemp));
      })
      .catch((error) => {
        setWeather({
          Temp: 0,
          seaLevel: 0,
          description: "",
        });
        console.error("Error fetching weather data:", error);
      });
  }, [city]);
  useEffect(() => {
    const savedCity = localStorage.getItem("City");
    setCity(savedCity ? JSON.parse(savedCity) : "");

    const savedWeather = localStorage.getItem("Weather");
    setWeather(
      savedWeather
        ? JSON.parse(savedWeather)
        : { Temp: 0, seaLevel: 0, description: "" }
    );
  }, []);
  return (
    <div className="py-2.5 px-0 bg-amber-300 border-3 border-rose-300 border-double">
      <input
        type="text"
        value={city}
        placeholder="Enter a city name: Amman"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setCity(e.target.value);
          localStorage.setItem("City", JSON.stringify(e.target.value));
        }}
      />
      <p className="text-sm text-gray-500">
        temp is : {weather.Temp == 0 ? 0 : Math.round(weather.Temp) - 273}°C
      </p>
      <p className="text-sm text-gray-500">
        description :{weather.description}
      </p>
      <p className="text-sm text-gray-500">sea level is {weather.seaLevel} </p>
    </div>
  );
}
