import React, { useEffect, useState } from "react";

export default function ResultCard({ city, currentWeather }) {
    const temperature = currentWeather.temp_f;
    const precipitation = currentWeather.precip_in;
  
    return (
      <div className="bg-slate-600 hover:bg-slate-800 hover:border border-slate-400 col-span-2 p-4 rounded-lg mb-4">
        <h3 className="text-xl text-slate-100 font-bold mb-2">{city.name}</h3>
        <p className="text-lg text-slate-100 mb-2">
          Temperature: {temperature}°F{" "}
          {temperature > 90 && <span className="text-red-500">🌡️</span>}
        </p>
        <p className="text-lg text-slate-100">
          Precipitation: {precipitation} in{" "}
          {precipitation > 1 && <span className="text-blue-500">☁️</span>}
        </p>
        <p className="text-lg text-slate-100">Wind: {currentWeather.wind_mph} mph</p>
        <p className="text-lg text-slate-100">Humidity: {currentWeather.humidity}%</p>
      </div>
    );
}