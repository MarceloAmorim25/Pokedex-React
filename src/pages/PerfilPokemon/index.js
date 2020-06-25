import React from 'react';
import Navbar from '../../navbar';
import axios from 'axios';
import PokeBall from '../../assets/pokebola.gif';
import './style.css';

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

         <div className="container-pokemon">
         <div className="descricao">
            <h1>{data.name}</h1>
            <img className="perfilPoke" src={data.image_url} alt="pokemon"/>
            <img onClick={handleFav} className="capturar" src={PokeBall} alt="pokemon"/>
            <span>Capturar</span>
         </div>
         <div className="habilidades">
            <h1>Altura</h1>
            {data.height}
            <h1>Peso</h1>
            {data.weight}
            <h1>Tipo</h1>
            {data.kind}
         </div>
         

      </div>
         
      </>
       
    );
}

