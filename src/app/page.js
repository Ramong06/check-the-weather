// import Image from 'next/image'

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchDataFromApi() {
      const weatherData = await fetchData();
      console.log(weatherData);
      setWeather(weatherData);
    }
    fetchDataFromApi();
  }, []);

  if(!weather) {
    return <p className="text-3xl text-slate-300">LOADING...</p>
  }

   return (
    <>
      <p className="text-slate-300">{JSON.stringify(weather)}</p>
    </>
  )
}
