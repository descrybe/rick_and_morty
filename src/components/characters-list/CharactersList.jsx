import React, { Component } from 'react';
import { connect } from 'react-redux';

import { charactersLoaded } from '../../actions';
import withCharactersService from '../hoc/with-characters-service';
import CharacterCard from '../character-card/CharacterCard';
import Spinner from '../spinner/Spinner';

import './CharactersList.scss';
class CharacterList extends Component {

    componentDidMount() {
        const { charactersService } = this.props;

        charactersService
            .getAllCharactersByPage(2)
            .then(res => {
                this.props.charactersLoaded(res.results);
            });
    };

    render() {
        const { characters, loading } = this.props;
        
        if (loading) {
            return <Spinner />
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

const mapStateToProps = ({ characters, loading }) => {
    return { characters, loading };
};

const mapDispatchToProps = { charactersLoaded };

export default withCharactersService()(
    connect(mapStateToProps, mapDispatchToProps)(CharacterList)
);