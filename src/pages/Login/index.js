import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './style.css';

export default function Login() {

    
    const[usuario, setUsuario] = useState([]);
    const history = useHistory();
    const usuarioAtual = localStorage.getItem('usuario');


   async function handleLogin(e) {
        e.preventDefault();

        localStorage.setItem('usuario', usuario);
        
        if(usuario !== usuarioAtual) {
            await axios
              .post('https://pokedex20201.herokuapp.com/users', {
                username: usuario
              })
              .then((res) => {
                console.log(res);
                history.push('/home');                
              })
              .catch(function (error) {
                console.log(error);
                alert('Falha no login, tente novamente.');
              });
        }else {
            history.push('/home');
        }
    }


    return(

        <div class="Login">
            <form onSubmit={handleLogin}>

                <h1>Página de Login</h1>

                <label>Usuário:</label>

                <input
                     type="text"
                     placeholder="Seu login" 
                     value={usuario}
                     onChange={e => setUsuario(e.target.value)}
                />

                <br />
    
                <button type="submit">Entrar</button>


            </form>
        </div>

    );
}

