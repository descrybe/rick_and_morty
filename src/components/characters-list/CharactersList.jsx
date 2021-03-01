import React, { Component } from 'react';
import { connect } from 'react-redux';

import { charactersLoaded, charactersRequested, charactersError } from '../../actions';
import withCharactersService from '../hoc/with-characters-service';
import CharacterCard from '../character-card/CharacterCard';
import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

import './CharactersList.scss';
class CharacterList extends Component {

    componentDidMount() {
        const { charactersService, charactersLoaded, 
            charactersRequested, charactersError } = this.props;
        charactersRequested();
        charactersService
            .getAllCharactersByPage(1)
            .then(firstRes => {
                charactersService
                    .getAllCharactersByPage(2)
                    .then(secondRes => {
                        const newRes = [...firstRes.results, ...secondRes.results]
                        charactersLoaded(newRes);
                    });
            })
            .catch((err) => charactersError(err));
    };

    render() {
        const { characters, loading, error } = this.props;
        
        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return (
            <ul className='character-list__wrapper'>
                {
                    characters.map(character => {
                        return (
                            <li key={character.id}>
                                <CharacterCard character={character}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    };
};

const mapStateToProps = ({ characters, loading, error }) => {
    return { characters, loading, error };
};

const mapDispatchToProps = { 
    charactersLoaded,
    charactersRequested,
    charactersError
};

export default withCharactersService()(
    connect(mapStateToProps, mapDispatchToProps)(CharacterList)
);