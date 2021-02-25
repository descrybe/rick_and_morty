import React, { Component } from 'react';
import CharactersService from '../../services/charactersService';
import CharacterCard from '../character-card/CharacterCard';

import './CharactersList.scss';

class CharacterList extends Component {


    render() {
        const { characters } = this.props;
        return (
            <ul>
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

export default CharacterList;