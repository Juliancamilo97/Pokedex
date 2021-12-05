import React, {useState} from 'react';
import axios from "axios";
import { Card, Col, InputGroup, FormControl, SplitButton, Dropdown, Container } from 'react-bootstrap'; 
// import Pokedex from 'pokedex-promise-v2';

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>                
                    <InputGroup type="text" onChange={handleChange} placeholder="Pokémon a Buscar" className="mb-3">
                        <FormControl aria-label="Text input with dropdown button" />
                        <SplitButton
                        variant="outline-secondary" onClick={handleChange} title="Buscar" id="segmented-button-dropdown-2" alignRight>
                            <Dropdown.Item href="#">Nombre</Dropdown.Item>
                            <Dropdown.Item href="#">Id</Dropdown.Item>
                            <Dropdown.Item href="#">Tipo</Dropdown.Item>                
                        </SplitButton>
                    </InputGroup>
                </label>
            </form>

            {pokemonData.map((data) => {
                return (
                    <Container>
                        <Col>
                            <Card>
                                <Card.Img className="imgPok" variant="top" src={data.sprites["front_default"]} />
                                    <Card.Body>
                                        <Card.Title>{data.name}</Card.Title>
                                        <Card.Text>Tipo:  {pokemonType} </Card.Text>
                                        <Card.Text>Altura:  {data.height*10} cm </Card.Text>
                                        <Card.Text>Peso:  {data.weight*10} g</Card.Text>
                                        <Card.Text>N° Pokédex:  {data.id} </Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>
                    </Container>
                );
            })}

        </div>
    )
}

export default SearchPokemon