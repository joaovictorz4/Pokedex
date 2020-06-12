import React from 'react'
import './Card.css'

export default class Card extends React.Component {

    constructor(props) {
        super(props)
        this.dados()

    }

    dados() {
        var vetor = {
            id: 0,
            nome: "",
            types: {
                nome: ""
            }
        }
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1")
            .then(res => res.json())
            .then(res => {
                res.results.forEach(element => {
                    fetch(element.url)
                        .then(res => res.json()
                            .then(res => {
                                vetor.id = res.id
                                vetor.nome = res.name
                                res.types.forEach(element => {
                                    vetor.types.nome = element.type.name
                                })

                            }))
                });

            })
        console.log(vetor.types.nome)
        console.log(vetor.id)
        console.log(vetor.nome)

    }
    render() {
        return (


            <div className="card-body">
                <a href="https://google.com">
                    <div className="title">
                        <h1>Bulbasaur</h1>
                        <h2>#001</h2>
                    </div>
                    <div className="stats">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt=""></img>
                        <div className="types">
                            <div className="types-content">
                                <h2>Grass</h2>
                                <h2>Poison</h2>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )

    }
}