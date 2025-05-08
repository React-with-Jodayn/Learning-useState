import axios from "axios";
import { useEffect, useState } from "react";

export default function Weather() {
  const apiKey: string = import.meta.env.VITE_WEATHER_API_KEY;
  const urlBase: string = import.meta.env.VITE_WEATHER_API_URL_BASE;

  const directionsdeadSea = {
    lat: 31.559029,
    lon: 35.47319,
  };
  const directionsAmman = {
    lat: 32.00372237183484,
    lon: 35.82952925709184,
  };

  type weatherObj = {
    Temp: number;
    seaLevel?: number;
    description: string;
  };

  const [weather, setWeather] = useState<weatherObj>({
    Temp: 0,
    seaLevel: 0,
    description: "",
  });

  const [City, setCity] = useState<string | null>(null);

  // useEffect for getting localStorage values
  useEffect(() => {
    const savedCity = localStorage.getItem("City");
    setCity(savedCity ? JSON.parse(savedCity) : "deadSea");

    const savedWeather = localStorage.getItem("Weather");
    setWeather(
      savedWeather
        ? JSON.parse(savedWeather)
        : { Temp: 0, seaLevel: 0, description: "" }
    );
  }, []);

  // useEffect for fetching weather API
  useEffect(() => {
    if (!City) return;
    const { lat, lon } =
      City === "deadSea" ? directionsdeadSea : directionsAmman;

    axios
      .get(`${urlBase}?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=ar`)
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
        console.error("Error fetching weather data:", error);
      })
      .finally(() => {
        console.log("Request completed");
      });
  }, [City]);

  return (
    <div className="py-2.5 px-0 bg-red-200 border-3 border-rose-800 border-double">
      <button
        onClick={() => {
          setCity(City === "deadSea" ? "Amman" : "deadSea");
          localStorage.setItem(
            "City",
            JSON.stringify(City === "deadSea" ? "Amman" : "deadSea")
          );
        }}
      >
        Weather in {City ?? "Loading..."} is :
      </button>
      <p className="text-sm text-gray-500">
        temp is : {Math.round(weather.Temp) - 273} °C
      </p>
      <p className="text-sm text-gray-500">
        description : {weather.description}
      </p>
      <p className="text-sm text-gray-500">sea level is : {weather.seaLevel}</p>
    </div>
  );
}
