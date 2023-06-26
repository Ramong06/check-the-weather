"use client"

export default function PokeCards({ pokemon, index }) {
	return (
		<li key={index}>
			<div>
				<div className="block border p-4 border-gray my-2 capitalize items-center text-slate-100 text-leg bg-gray-700 rounded-md hover:bg-slate-900 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
					<img className="w-20 h-20 mr-3" src={pokemon.image} alt={pokemon.name} />
					<p className="mr-2 font-bold text-slate-100">{index + 1}.) {pokemon.name}</p>
					<p className="mr-2 font-bold text-slate-100">{pokemon.weight} lbs.</p>
					<p className="mr-2 font-bold text-slate-100">Species: {pokemon.species.name}</p>
					<p className="mr-2 font-bold text-slate-100">Ability: {pokemon.abilities[0].ability.name}</p>
					<p className="mr-2 font-bold text-slate-100">Power Move: {pokemon.moves[0].move.name}</p>
				</div>
			</div>
		</li>
	)
};