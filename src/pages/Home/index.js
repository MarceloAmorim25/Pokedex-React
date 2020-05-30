import React from 'react';
import axios from 'axios';
import PokeBall from '../../assets/PokeBall.png';
import Navbar from '../../navbar';
import './style.css';

   //POST /users/:username/starred/:pokemon
   //Acrescenta pokémon à lista de favoritos de ​:username

export default function Home() {

   const [data, setData] = React.useState([]);
   const [pokemon, setPokemon] = React.useState('');

   React.useEffect(() => {
      axios
         .get('https://pokedex20201.herokuapp.com/pokemons')
         .then((res) => setData(res.data.data));
   }, []);
   
   console.log(data);
   
  function handleFav(e, id) {

     e.preventDefault();

     let poke = localStorage.setItem('pokemon', data[id].name);
     console.log(poke);

     setPokemon(poke);

     let username = localStorage.getItem('usuario');
     console.log(username);
      
         axios
           .post(`https://pokedex20201.herokuapp.com/users/${username}/starred/${pokemon}`, {           
           })
           .then(() => {
             alert('Pokemon capturado!');
           })
           .catch(function (error) {
             console.log(error);
             alert('Não foi possível capturar esse Pokemon!');
           });
  }

   return(
      <>
         <Navbar />
          {data && (           
                  <div className="deck">
                     {data.map(pokemon => (
                           <span key={pokemon.id}>

                              <div className="pokeCard">

                                 <img src={pokemon.image_url} alt=""/>

                                 <br/>

                                 <strong>ALTURA:</strong>
                                 <p>{pokemon.height}</p>

                                 <strong>TIPO:</strong>
                                 <p>{pokemon.kind}</p>

                                 <strong>NOME:</strong>
                                 <p>{pokemon.name}</p>

                                 <strong>DESCRIÇÃO: </strong>
                                 <p>{pokemon.weight}</p>                                                                    

                                 <button type="button" onClick={handleFav}><img id="capturar" src={PokeBall} alt=""/></button>
                                 

                              </div>

                           </span>                      
                     ))}
                </div>                
            )}
      </>
       
    );
}

