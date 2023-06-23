import React from "react";

export default function City({ city, currentWeather }) {
    return (
        <div className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
            <h2 className="text-slate-300 text-xl font-bold mb-2">{city.name}</h2>
            <p className="text-slate-300 mb-1">Region: {city.region}, {city.country}</p>
            <p className="text-slate-3000 mb-1">Local Time: {city.localtime}</p>
            <p className="text-slate-300 mb-1">Temp: {currentWeather.temp_f}°F</p>
            <p className="text-slate-300 mb-1">Wind: {currentWeather.wind_mph}mph</p>
            <p className="text-slate-300 mb-1">Humidity: {currentWeather.humidity}</p>
            <p className="text-slate-300 mb-1">Rain: {currentWeather.precip_in} in.</p>
        </div>
    )
}