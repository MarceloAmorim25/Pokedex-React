import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './style.css';

export default function Login() {

    
    const[usuario, setUsuario] = useState('');
    const[data, setData] = useState([]);
    const history = useHistory(); 
    
    
    React.useEffect(() => {

      if(usuario.length !== 0){

        axios
          .get(`https://pokedex20201.herokuapp.com/users/${usuario}`)
          .then((res) => {
            setData(res.data.user.username)
          })
          .catch(function(error) {
            console.log(error);
          })

      }

   }, [usuario])

   localStorage.setItem('usuario', usuario);

   async function handleLogin(e) { 
     
        e.preventDefault();
                       
        if(usuario === data) {

          history.push('/home');
          alert('Login autorizado...');

        }else {
            await axios
              .post('https://pokedex20201.herokuapp.com/users', {
                username: usuario
              })
              .then((res) => {
                console.log(res);
                alert('Novo usuário criado!');
                history.push('/home');                
              })
              .catch(function (error) {
                console.log(error);
                alert('Falha no login, tente novamente.');
              });
        }
    }

    return(

        <div className="box-container">
          <div className="box">
              <form  onSubmit={handleLogin}>

                  <h1>Página de Login</h1>

                  <label>Usuário:</label>

                  <input
                      id="input"
                      type="text"
                      placeholder="Login" 
                      value={usuario}
                      onChange={e => setUsuario(e.target.value)}
                  />

                  <br />
      
                  <button type="submit">Entrar</button>

              </form>
            </div>
        </div>

    );
}


