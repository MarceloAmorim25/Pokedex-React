import React from 'react';
import Navbar from '../../navbar';
import './style.css';

import Ash from '../../assets/ash.png'

export default function Perfil() {
    return(

        <div className="perfil">
            <Navbar />          
            <div className="pokedex">
                <img src={Ash} alt=""/> 
                <h1>Pokemons Capturados</h1>
            </div>   
            <div className="descricao">
                <ul>
                    <li>Nome: </li>
                    <li>Sobrenome: </li>
                    <li>Cidade: </li>
                    <li>Pokemon Preferido: </li>
                    <li>Contato: </li>
                </ul>
            </div> 
                 
        </div>
    );
}