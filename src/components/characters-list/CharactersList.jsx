import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    };
};

export default connect(mapStateToProps, )(CharacterList);