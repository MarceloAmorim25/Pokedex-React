import React from 'react';
import axios from 'axios';
import Navbar from '../../navbar';
import { useHistory } from 'react-router-dom';
import './style.css';


export default function Home() {

   const [data, setData] = React.useState([]);
   const [number, setNumber] = React.useState(1);
   const list = [];

   const history = useHistory();

   //GET => recebendo os dados dos pokemons

   React.useEffect(
      
      () => {

         axios
         .get(`https://pokedex20201.herokuapp.com/pokemons?page=${number}`)
         .then(function resp(res){

            setData(res.data.data);
            console.log(res);
         })

   }, [number]);


   //atribuindo um característica de não clicado para cada pokemon

   data.map(k => {
      return list.push(k.clicked = false);
   })

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

      <div className="botoesPaginacao">
         <button className="botoesProximoAnterior" onClick={() => setNumber(number - 1)}>Página Anterior</button>
         <button className="botoesProximoAnterior" onClick={() => setNumber(number + 1)}>Próxima Página</button>         
      </div>

      <div className="pagina">Página: {number}</div>

      <div className="container-home">

          {data && (           
                  <div className="deck">
                     {data.map(pokemon => (
                                                
                              <div className="pokeCard" key={pokemon.id} onClick={Description} onMouseOver={() => pokemon.clicked = true}>

                                    <img src={pokemon.image_url} alt=""/>

                                    <br/>
                                    <p className="numero">Nº: {pokemon.id}</p>
                                    <p className="nome">{pokemon.name}</p>                                                                   
                                    <p className="tipo">{pokemon.kind}</p>

                           </div>                                                                                                                  
                     ))}
                </div>                
            )}

         </div>
               <div className="botoesPaginacao">
                  <button className="botoesProximoAnterior" onClick={() => setNumber(number - 1)}>Página Anterior</button>
                  <button className="botoesProximoAnterior" onClick={() => setNumber(number + 1)}>Próxima Página</button>         
               </div>
     </>
       
    );
}

