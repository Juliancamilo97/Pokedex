import React, { useState } from "react";
import Axios from "axios";
import Swal from 'sweetalert2'
import { InputGroup, SplitButton, Dropdown, FormControl } from 'react-bootstrap'; 
import SearchPokemon from '../data/SearchPokemon';


export default function GuardarEquipo() {

    const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");
    const [pokemonId, setPokemonId] = useState("");


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
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await Axios.get(url);
            toArray.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokemonData(toArray);
            setPokemonId(res.data.id)
        } catch (e) {
            console.log(e);
        }
    };

    const handleAdd = async(e) => {

        e.preventDefault();
        const email = sessionStorage.getItem('email');
        const idUser = sessionStorage.getItem('id')
        const token = sessionStorage.getItem('token')
        const team = 1
        const pokemon = {idPok:pokemonId, email, idUser, team}

        const answer = await Axios.post('./pokemon/create', pokemon, {
            headers:{'authorization':token}          
        })

        const msg = answer.data.msg

        if (msg!=='Pokemon Guardado') {
            Swal.fire({
                icon: 'error',
                title: msg,
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon:'success',
                title:"'Pokémon Guardado correctamente",
                showConfirmButton:false,
                timer:1500
            })                
        }    
    };

    console.log(pokemonData);

    return (
    <div className="">
                <form className="pokemon-form" onSubmit={handleSubmit}>
                    <label>                
                        <InputGroup className="pokemon-input" type="text" onChange={handleChange} placeholder="Pokémon a Buscar" className="mb-3">
                            <FormControl aria-label="Text input with dropdown button" />
                            <input type="submit" className="pokemon-btn" value=""/>
                        </InputGroup>
                    </label>
                </form>

        {pokemonData.map((data) => {
        return (
            <div className="container">
                <form onSubmit = { handleAdd }>    
                    <img src={data.sprites["front_default"]} />
                    <div>
                        <div className="pokemon-name">{data.name}</div>
                        <div className="divTableRow">Tipo: {pokemonType}</div>
                        <div className="divTableRow">Número de Batallas: {data.game_indices.length}</div>                
                    </div>
                    <div>
                        <button type="submit">Agregar</button>
                    </div>
                </form>
            </div>
        );
        })}
    </div>
    );
};



