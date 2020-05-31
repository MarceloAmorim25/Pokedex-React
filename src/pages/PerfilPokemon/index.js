import React from 'react';
import Navbar from '../../navbar';
import axios from 'axios';
import PokeBall from '../../assets/PokeBall.png';
import './estilo.css';

export default function PerfilPokemon() {

    const [data, setData] = React.useState([]);

    //recupera no localStorage o nome do pokemon clicado

    let descriptionPokemon = localStorage.getItem('pokemons');


   //GET => dados do pokemon registrado no localStorage

    React.useEffect(() => {
       axios
          .get(`https://pokedex20201.herokuapp.com/pokemons/${descriptionPokemon}`)
          .then((res) => setData(res.data));
    }, [descriptionPokemon]);

    console.log(data);

   //Essa é responsável pela captura do Pokemon
   //Primeiro o preventDefault para evitar que a página recarregue
   //Depois o post para API com o nome do usuário logado e o pokemon da página de descrição
 
  function handleFav(e) {

     e.preventDefault();

     let username = localStorage.getItem('usuario');
      
         axios
           .post(`https://pokedex20201.herokuapp.com/users/${username}/starred/${descriptionPokemon}`)
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

         <div>
            <div><h1>{data.name}</h1></div>
            <div><h1><img src={data.image_url} alt="pokemon"/></h1></div>
            <div><h1>{data.height}</h1></div>
            <div><h1>{data.weight}</h1></div>
            <div><h1>{data.kind}</h1></div>
            <div><button onClick={handleFav}><img src={PokeBall} alt="pokemon"/></button></div>            
         </div>
         
      </>
       
    );
}


