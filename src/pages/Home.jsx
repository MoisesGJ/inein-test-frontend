import React, { useEffect, useState } from 'react';
import { getPokemonList } from '../services/poke.api';
import Card from '../components/Card';

const Home = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const data = await getPokemonList();
                setPokemonList(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonList();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">API Pokemon</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pokemonList.map((pokemon, index) => (
                    <Card
                        key={index}
                        name={pokemon.name}
                        image={pokemon.image}
                        height={pokemon.height}
                        weight={pokemon.weight}
                        url={pokemon.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;