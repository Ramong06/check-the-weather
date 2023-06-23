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
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    placeholder="Search City" 
                    className="text-slate-800" 
                />
                <button type="submit">Search</button>
            </form>
        </section>
    )
};