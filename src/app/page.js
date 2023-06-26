"use client";

import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchData } from "@/utils/api";
import ResultCard from "./components/ResultCard";
import CityCard from "./components/CityCard";
import Link from "next/link";

export default function Weather() {
  const [weatherDataList, setWeatherDataList] = useState([]);

  const handleSearch = async (query) => {
    const data = await fetchData(query);
    setWeatherDataList((prevList) => [data, ...prevList]);
  };

  return (
    <div>
      <h1 className="text-2xl text-slate-100">Weather</h1>
      <nav className="flex justify-end">
        <Link
          type="submit"
          className="bg-slate-700 hover:bg-slate-900 text-slate-100 px-4 py-2 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
          href="/pokedex"
        >
          Pokedex 🐢
        </Link>
      </nav>
      <div className="flex flex-wrap mt-6">
        <div className="w-full md:w-1/2 lg:w-1/3 pl-4 pb-6">
          <SearchBar onSearch={handleSearch} className="mb-6" />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3  pl-4">
          <div>
            {weatherDataList.length > 0 ? (
              weatherDataList.map((weatherData, index) => (
                <ResultCard
                  key={index}
                  city={weatherData.location}
                  currentWeather={weatherData.current}
                />
              ))
            ) : (
              <p className="text-3xl text-slate-100">🚧 This page is currently under development, please continue to the Pokedex by clicking the Pokedex button at the top right 🚧.</p>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 pl-4">
          <section className="flex flex-col space-y-4">
            <CityCard city="San Antonio" />
            <CityCard city="Houston" />
            <CityCard city="Austin" />
            <CityCard city="Laredo" />
            <CityCard city="El Paso" />
          </section>
        </div>
      </div>
    </div>
  );
}