import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './style.css';

export default function Login() {

    const[usuario, setUsuario] = useState('');
    const[senha, setSenha] = useState('');
    const history = useHistory();

    function handleLogin(e) {
        e.preventDefault();

        try{

            localStorage.setItem('usuario', usuario);
            localStorage.setItem('senha', senha);
            history.push('/home');

        }catch(err) {
            alert('Falha no login, tente novamente.')
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

                <label>Senha:</label>
                <input
                    type="password" 
                    placeholder="Sua senha" 
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />

                <br />

                <button type="submit">Entrar</button>

                <p>Não é registrado?</p>
                <button><Link className="link" to="/registro">Registre aqui</Link></button>

            </form>
        </div>

    );
}