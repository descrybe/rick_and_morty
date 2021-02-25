import React from 'react';

const {
    Provider: CharactersServiceProvider,
    Consumer: CharactersServiceConsumer
} = React.createContext();

export {
    CharactersServiceProvider, 
    CharactersServiceConsumer
};