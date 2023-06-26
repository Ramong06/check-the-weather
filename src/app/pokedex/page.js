"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Weather() {

  return (
    <div className="flex flex-wrap">
      <nav className="flex justify-end">
        <Link
          type="submit"
          className="bg-slate-500 hover:bg-slate-600 text-white px-4 py-2 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
          href="/"
        >
         🌦️ Weather
        </Link>
      </nav>
    </div>
  );
}