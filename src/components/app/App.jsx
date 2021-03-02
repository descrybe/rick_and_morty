import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Header from '../header/Header';
import CharacterPage from '../pages/CharacterPage';

import './App.scss';

const App = () => {
    return (
        <div>
            <Link to='/characters?page=1'>     
                <Header />
            </Link>
            <Switch>
                <Route 
                    path='/characters'
                    render={({ match }) => {
                        console.log(match);
                        const { currentPage } = match.params;
                        return <HomePage currentPage={currentPage}/>
                    }}
                    />
                <Route 
                    exact
                    path='/character/:id' 
                    render={({ match }) => {
                        const { id } = match.params;
                        return <CharacterPage characterId={id}/>
                    }}/>
            </Switch>
        </div>
    );
};

export default App;