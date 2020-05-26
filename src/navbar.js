import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


export default function Navbar() {
    return(

        <div className="navbar">          
            <ul>
                <li><Link className="link" to="/perfil">Perfil</Link></li>
                <li><Link className="link" to="/">Saiba mais</Link></li>
                <li><Link className="link" to="/">Pesquisar</Link></li>
                <li><Link className="link" to="/">Logout</Link></li>
            </ul>                
        </div>
    );
}




