import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Header from '../header/Header';
import CharacterPage from '../pages/CharacterPage';

import './App.scss';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route 
                    path='/' 
                    component={ HomePage }
                    exact />
                <Route 
                    path='/character' 
                    component={ CharacterPage }/>
            </Switch>
        </div>
    );
};

export default App;