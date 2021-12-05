import React, {useState} from 'react';
import axios from "axios";
import { Card, InputGroup, FormControl, Container } from 'react-bootstrap'; 
// import Pokedex from 'pokedex-promise-v2';
import '../styles/Pokedex.css';

function SearchPokemon() {

    // const P = new Pokedex();

    const [pokemon, setPokemon] = useState("ditto")
    const [pokemonData, setPokemonData] = useState([])
    const [pokemonType, setPokemonType] = useState("")

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    };

    const getPokemon = async () => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const res = await axios.get(url)
            toArray.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokemonData(toArray);
            // console.log(res)
        } catch (e) {
            console.log(e)
        }
    };
    console.log(pokemonData);

    return (
        <div className="pokedex-left">                
            <div className="pokedex-left-top">
                <div className='light is-sky is-big'/>
                <div className="light is-red" />
                <div className="light is-yellow" />
                <div className="light is-green" />
            </div>

                {pokemonData.map((data) => {
                    return (
                        <div className="pokedex-screen-container">
                            
                                <img className="pokemon-img" variant="top" src={data.sprites["front_default"]} />
                                    <div className="pokemon-info">
                                        <span className="pokemon-name">{data.name}</span>
                                        <span>Tipo:</span>
                                        <span>{pokemonType} </span>
                                        <span>Altura: </span>
                                        <span>{data.height*10} cm </span>
                                        <span>Peso:</span>
                                        <span>{data.weight*10} g</span>
                                        <span>N° Pokédex:</span>
                                        <span>{data.id} </span>
                                    </div>                            
                        </div>
                    );
                })}
            <div className="pokedex-left-bottom">
                <div className="pokedex-left-bottom-lights">
                    <div className="light is-blue is-medium" />                    
                    <div className="light is-green is-large" />
                    <div className="light is-orange is-large" />                    
                </div>
                <form className="pokemon-form" onSubmit={handleSubmit}>
                        <label>                
                            <InputGroup className="pokemon-input" type="text" onChange={handleChange} placeholder="Pokémon a Buscar" className="mb-3">
                                <FormControl aria-label="Text input with dropdown button" />
                                <input type="submit" className="pokemon-btn" value=""/>
                            </InputGroup>
                        </label>
                    </form>
            </div>

        </div>
    )
}

export default SearchPokemon