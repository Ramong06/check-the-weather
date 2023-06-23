// import Image from 'next/image'

"use client";

import Link from "next/link";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";
import CityCard from "./components/CityCard";
import SACard from "./components/SACard";

export default function Weather() {
  const [weatherData, setWeatherData] = useState("");
  const [cityQuery, setCityQuery] = useState("");

  const handleSearch = async (query) => {
    setCityQuery(query);
  };

useEffect(() => {
  async function fetchWeatherData() {
    if(cityQuery) {
      const data = await fetchData(cityQuery);
      setWeatherData(data);
    }
  }
  fetchWeatherData();
}, [cityQuery]);

   return (
    <div>
      <SearchBar 
      onSearch={handleSearch}
      className="mb-6" />
      {weatherData ? (
        <div>
          <CityCard 
          city={weatherData.location} 
          currentWeather={weatherData.current}
           />
        </div>
      ) : (
        <p className="text-3xl text-slate-300">City Data will go here.</p>
      )}
      <section>
        <SACard city="San Antonio" />
      </section>
    </div>
  )
}
