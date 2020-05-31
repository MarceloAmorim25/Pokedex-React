import React from 'react';
import axios from 'axios';
import Navbar from '../../navbar';
import { useHistory } from 'react-router-dom';
import './style.css';


export default function Home() {

   const [data, setData] = React.useState([]);
   const list = [];
   
   const history = useHistory();

   //GET => recebendo os dados dos pokemons

   React.useEffect(() => {
      axios
         .get('https://pokedex20201.herokuapp.com/pokemons')
         .then((res) => setData(res.data.data));
   }, []);

   //atribuindo um característica de não clicado para cada pokemon

   data.map(k => {
      return list.push(k.clicked = false);
   })

   console.log(data);

    //essa função encaminha para a página de descrição.
    //Primeiro ela salva no localStorage o nome do pokemon clicado
    //Depois redireciona para a página de descrição

   function Description() {
      data.map(p => {
         if(p.clicked === true) {
            localStorage.setItem('pokemons', p.name)
         }
         return p.name;
      })

      history.push("/pokemon");      
   }

   return(
      <>
         <Navbar />
          {data && (           
                  <div className="deck">
                     {data.map(pokemon => (
                                                
                              <div className="pokeCard" key={pokemon.id}>

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

                                 <div>
                                    <button type="button" onClick={Description} onMouseOver={() => pokemon.clicked = true}>Descrição</button>
                                 </div>

                           </div>                                                                                                                  
                     ))}
                </div>                
            )}
      </>
       
    );
}
