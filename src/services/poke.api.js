import axios from 'axios';

const POKE_API_URL = 'https://pokeapi.co/api/v2/';

export const getPokemonList = async () => {
    try {
        const response = await axios.get(`${POKE_API_URL}pokemon?limit=20`);
        const pokemonList = response.data.results;

        const detailedPokemonList = await Promise.all(pokemonList.map(async (pokemon) => {
            const pokemonDetails = await axios.get(pokemon.url);
            const pokemonData = pokemonDetails.data;

            const name = pokemonData.name;
            const image = pokemonData.sprites?.front_default || "https://via.placeholder.com/150";
            const height = pokemonData.height ? `${pokemonData.height / 10} m` : "No data";
            const weight = pokemonData.weight ? `${pokemonData.weight / 10} kg` : "No data";
            const url = pokemon.url;


            return {
                name,
                image,
                height,
                weight,
                url
            };
        }));

        return detailedPokemonList;
    } catch (error) {
        console.error('Error al obtener los pokemones:', error);
        throw error;
    }
};
