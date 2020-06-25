import React from 'react';
import Navbar from '../../navbar';
import axios from 'axios';
import Ash from '../../assets/ash.png'
import './style.css';


export default function Perfil()  {

   const [user, setUser] = React.useState({});
   const [pokemons, setPokemons] = React.useState([]);
   let usuario = localStorage.getItem('usuario');

  React.useEffect(() => {
      axios
         .get(`https://pokedex20201.herokuapp.com/users/${usuario}`)
         .then(res => {
            setUser(res.data.user)
            setPokemons(res.data.pokemons)});
   }, [usuario]);

 
   const handleDelete = async (pokemon) => { 

    console.log(pokemon);
       
    await axios
        .delete(`https://pokedex20201.herokuapp.com/users/${usuario}/starred/${pokemon}`)
        .then(res => console.log(res));
        window.location.reload(false);
    };
 
    return(
        <>
        <Navbar />         
        <div className="box-container-perfil">
            <div className="pokedex">
            <img className="ash" src={Ash} alt=""/> 
                <h1 className="usuario">{user.username}</h1>
                <h3> Pokemons favoritos: {pokemons.length}</h3>
                <div className="pokemonsFavoritos">
                {pokemons.map(p => (
                    <div className="favoritos">
                        <img className="pokemonImagem" src={p.image_url} onClick={() => handleDelete(p.name)} alt=""/>
                        <span className="pokemonNome">{p.name}</span>
                    </div> 
                ))}
                </div>

            </div>     
        </div>
        </>
    );
}
