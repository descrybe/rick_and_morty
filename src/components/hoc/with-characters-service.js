import React from 'react';
import { CharactersServiceConsumer } 
    from '../characters-service-context/CharactersServiceContext';

const withCharactersService = () => (Wrapped) => {
    return (props) => {
        return (
            <CharactersServiceConsumer>
                {
                    (charactersService) => {
                        return (
                            <Wrapped {...props} 
                                charactersService={charactersService}/>
                        )
                    }
                }
            </CharactersServiceConsumer>
        )
    }
};

export default withCharactersService;