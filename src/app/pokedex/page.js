"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import PokeCards from '../components/PokeCards';

export default function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=251');
        const { results } = await res.json();
        const pokemonData = await Promise.all(
          results.map(async (result, index) => {
            const paddedId = ('00' + (index + 1)).slice(-3);
            const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
            const response = await fetch(result.url);
            const data = await response.json();
            return { ...data, image };
          })
        );
        setPokemon(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div title="Pokedex">
      <nav className="flex justify-between p-4">
        <h1 className="text-2xl text-slate-100">Pokedex</h1>
        <Link
          type="submit"
          className="bg-slate-700 hover:bg-slate-900 text-slate-100 px-4 py-2 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
          href="/"
        >
          Weather 🌦️
        </Link>
      </nav>
      <form>
        <input
          className="h-10 rounded focus:outline-none focus:shadow-outline text-center"
          placeholder="Search for Pokemon"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <ul className="flex flex-col tracking-widest">
        {pokemon
          .filter((pokeOne) =>
            pokeOne.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((pokeOne, index) => (
            <PokeCards key={index} index={index} pokemon={pokeOne} />
          ))}
      </ul>
    </div>
  );
}
