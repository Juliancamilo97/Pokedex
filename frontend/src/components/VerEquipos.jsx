import React, {useState} from 'react'
import Axios from "axios";
import Swal from 'sweetalert2'
import { Card, Row, Col } from 'react-bootstrap'; 

export default  function VerEquipos() {

    const [pokemonArray, setPokemonArray] = useState([])

    const getPokemon = async (id) => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`
            const res = await Axios.get(url)
            toArray.push(res.data);
            return toArray[0]
            // console.log(res)
        } catch (e) {
            console.log(e)
        }
    };

    const ViewTeam = async(e) => {

        e.preventDefault();
        const idUser = sessionStorage.getItem('id')
        const token = sessionStorage.getItem('token')
        const res = await Axios.get('./pokemon/listUser/'+idUser, {
            headers:{'authorization':token}          
        })
        if (res.data.length>0) {
            const array = []
            for (let index = 0; index < res.data.length; index++) {
                const element = await getPokemon(res.data[index].idPok);
                array.push(element)
            }
            setPokemonArray(array);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No tiene Pokémon Guardados',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (

        <div>
            <form onSubmit = { ViewTeam }>
                <button  type="submit">Ver Equipo</button>
            </form>
    
        {pokemonArray.map((data) => {
        return (
            <div>
                <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card>
                                <img className="pokemon-img" variant="top" src={data.sprites["front_default"]} />
                                <Card.Body>
                                    <Card.Title className="pokemon-name">{data.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                </Row>
            </div>
            )
        })}
        </div>
    )
}