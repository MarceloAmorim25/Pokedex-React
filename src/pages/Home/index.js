import React from 'react';
import axios from 'axios';
import PokeBall from '../../assets/PokeBall.png';
import Navbar from '../../navbar';
import './style.css';


export default function Home() {

   const [data, setData] = React.useState([]);

   React.useEffect(() => {
      axios
         .get('https://pokedex20201.herokuapp.com/pokemons')
         .then((res) => setData(res.data.data));
   }, []);

  
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

                                 <button type="button"><img id="capturar" src={PokeBall} alt=""/></button>
                                 

                              </div>

                           </span>                      
                     ))}
                </div>                
            )}
      </>
       
    );
}
