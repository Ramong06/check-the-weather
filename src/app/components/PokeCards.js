import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PokeCards() {
    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20');
            const data = response.data.results;
            setPokeList(data);
          } catch (error) {
            console.error('Error fetching Pokémon:', error);
          }
        };
    
        fetchData();
      }, []);
  
      return (
        <div>
          {pokeList.map((pokemon) => (
            <div key={pokemon.name}>
              <h3>{pokemon.name}</h3>
            </div>
          ))}
        </div>
      );
    };