import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './style.css';

export default function Login() {

    const[usuario, setUsuario] = useState('');
    const[senha, setSenha] = useState('');
    const history = useHistory();

   async function handleLogin(e) {
        e.preventDefault();
        console.log(e);

        localStorage.setItem('usuario', usuario);
        
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
