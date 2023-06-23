import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SACard({ city }) {
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
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold">{city}</h2>
        <p className="text-lg">Temperature: {temp_f}°F</p>
        <p className="text-lg">Wind: {wind_mph} mph</p>
        <p className="text-lg">Humidity: {humidity}%</p>
        <p className="text-lg">Precipitation: {precip_in} in</p>
    </div>
    );
}
