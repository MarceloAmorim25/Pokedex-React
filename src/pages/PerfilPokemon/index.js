import React from 'react';
import Navbar from '../../navbar';
import axios from 'axios';

export default function PerfilPokemon() {

    //GET /pokemons/:name
    //Substitua ​:name​ pelo identificador de um pokémon 
    //específico para receber as informaçõesdo pokémon específico


    const [data, setData] = React.useState([]);
   

    React.useEffect(() => {
       axios
          .get('https://pokedex20201.herokuapp.com/pokemons/')
          .then((res) =>
             setData(res.data)       
           );
    }, []);
 
    console.log(data);

   return(
      <>
         <Navbar />

         <div>
            <img src={data.image_url} alt="pokemon"></img>
               <div>{data.kind}</div>
               <div>{data.name}</div>
               <div>{data.weight}</div>
               <div>{data.height}</div>
         </div>
         
      </>
       
    );
}
