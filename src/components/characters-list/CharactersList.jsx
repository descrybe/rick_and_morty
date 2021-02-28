import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharacterCard from '../character-card/CharacterCard';
import withCharactersService from '../hoc/with-characters-service';

import './CharactersList.scss';
class CharacterList extends Component {

    componentDidMount() {
        const { charactersService } = this.props;
        const asyncData = charactersService.getAllCharacters();

        asyncData.then(res => {
            this.props.charactersLoaded(res.results);
        });
    }

    render() {
        const { characters } = this.props;
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

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        charactersLoaded: (newCharacters) => {
            dispatch({
                type: 'CHARACTERS_LOADED',
                payload: newCharacters
            })
        }
    };
};

export default withCharactersService()(
    connect(mapStateToProps, mapDispatchToProps)(CharacterList)
);