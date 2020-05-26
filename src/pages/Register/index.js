import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Registro() {
    return(

        <div className="Registro">
            <form>

                <h1>Página de Registro</h1>

                <label>Novo usuário</label>
                <input />

                <br />

                <label>Nova senha</label>
                <input />

                <button type="submit">Registrar</button>

                <br />

                <Link className="link" to="/">Voltar para o Login</Link>

            </form>
        </div>

    );
}