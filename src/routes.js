import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import PerfilPokemon from './pages/PerfilPokemon';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />           
                <Route path="/perfil" component={Perfil} />
                <Route path="/pokemon" component={PerfilPokemon} />
            </Switch>
        </BrowserRouter>
    );
}
