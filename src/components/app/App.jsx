import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Header from '../header/Header';
import CharacterPage from '../pages/CharacterPage';

import './App.scss';

const App = () => {
    return (
        <div>
            <Link to='/'>                
                <Header />
            </Link>
            <Switch>
                <Route 
                    path='/' 
                    component={ HomePage }
                    exact />
                <Route 
                    path='/characters/:id' 
                    render={({ match }) => {
                        const { id } = match.params;
                        return <CharacterPage characterId={id}/>
                    }}/>
            </Switch>
        </div>
    );
};

export default App;