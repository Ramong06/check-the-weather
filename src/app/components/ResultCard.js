import React, { useEffect, useState } from "react";

export default function ResultCard({ city, currentWeather }) {
    const temperature = currentWeather.temp_f;
    const precipitation = currentWeather.precip_in;
  
    return (
      <div className="bg-slate-400 hover:bg-slate-200 p-4 rounded-lg mb-4">
        <h3 className="text-xl font-bold mb-2">{city.name}</h3>
        <p className="text-lg mb-2">
          Temperature: {temperature}°F{" "}
          {temperature > 90 && <span className="text-red-500">🌡️</span>}
        </p>
        <p className="text-lg">
          Precipitation: {precipitation} in{" "}
          {precipitation > 1 && <span className="text-blue-500">☁️</span>}
        </p>
        <p className="text-lg">Wind: {currentWeather.wind_mph} mph</p>
        <p className="text-lg">Humidity: {currentWeather.humidity}%</p>
      </div>
    );
}