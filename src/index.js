import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import App from './components/app/App';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import CharactersService from './services/charactersService';
import { CharactersServiceProvider } 
    from './components/characters-service-context/CharactersServiceContext';

const charactersService = new CharactersService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <CharactersServiceProvider value={charactersService}>
                <Router>
                    <App />
                </Router>
            </CharactersServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);