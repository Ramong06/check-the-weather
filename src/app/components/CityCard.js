import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CityCard({ city }) {
    const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
          try {
            const response = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
              params: { q: city },
              headers: {
                'X-RapidAPI-Key': accessToken,
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
              },
            });
            setWeather(response.data);
          } catch (error) {
            console.error("this is broken", error);
          }
        };
    
        fetchWeatherData();
    }, [city]);

    if(!weather) {
        return <p>LOADING...</p>
    }

    const { temp_f, wind_mph, humidity, precip_in } = weather.current;

    return (
    <div className="bg-slate-600 hover:bg-slate-800 hover:border border-slate-400 col-span-2 p-4 rounded-lg mb-4">
        <h2 className="text-2xl text-slate-100 font-semibold">{city}</h2>
        <p className="text-lg text-slate-100 mb-2">
          Temperature: {temp_f}°F{" "}
          {temp_f > 90 && <span className="text-red-500">🌡️</span>}
        </p>
        <p className="text-lg text-slate-100">
          Precipitation: {precip_in} in{" "}
          {precip_in > 1 && <span className="text-blue-500">☁️</span>}
        </p>
        <p className="text-lg text-slate-100">Wind: {wind_mph} mph</p>
        <p className="text-lg text-slate-100">Humidity: {humidity}%</p>
    </div>
    );
}
