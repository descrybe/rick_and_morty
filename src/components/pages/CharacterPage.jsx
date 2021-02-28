import React, { Component } from 'react';
import { connect } from 'react-redux';

import { singleCharacterLoaded } from '../../actions';
import withCharactersService from '../hoc/with-characters-service';
import Spinner from '../spinner/Spinner';

class CharacterPage extends Component {
    componentDidMount() {
        const { characterId, charactersService } = this.props;

        charactersService
            .getCharacterById(characterId)
            .then(res => {
                this.props.singleCharacterLoaded(res);
            });
    };

    render() {
        const { singleCharacter, loading } = this.props;
        const { name, image, gender, species } = singleCharacter;

        if (loading) {
            return <Spinner />
        }

        return (
            <div>
                <div className='character-page__avatar'>
                    <img src={image} alt={name}/>
                </div>
                <div className='character-page__description-section'>
                    <span className='character-page__description-name'>{name}</span>
                </div>
                <div className='character-page__description-section'>
                    <p>Gender:</p>
                    <span>{gender}</span>
                </div>
                <div className='character-page__description-section'>
                    <p>Species:</p>
                    <span>{species}</span>
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ singleCharacter, loading }) => {
    return { singleCharacter, loading };
};

const mapDispatchToProps = { singleCharacterLoaded };

export default withCharactersService()(
    connect(mapStateToProps, mapDispatchToProps)(CharacterPage)
);