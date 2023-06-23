"use client"

import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <section>
            <form onSubmit={handleSubmit} className="flex">
                <input 
                    type="text" value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    placeholder="Search City" 
                    className="text-slate-800 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent" 
                />
                <button type="submit" className="bg-slate-500 hover:bg-slate-600 text-white px-4 py-2 rounded-r-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50">
                    Search
                </button>
            </form>
        </section>
    )
};