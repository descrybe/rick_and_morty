import React, { Component } from 'react';
import { connect } from 'react-redux';

import { singleCharacterLoaded } from '../../actions';
import withCharactersService from '../hoc/with-characters-service';
import Spinner from '../spinner/Spinner';

import './CharacterPage.scss';

class CharacterPage extends Component {
    componentDidMount() {
        const { characterId, charactersService } = this.props;

        charactersService
            .getCharacterById(characterId)
            .then(res => {
                this.props.singleCharacterLoaded(res);
                console.log(res);
            });
    };

    render() {
        const { singleCharacter, loading } = this.props;
        const { name, image, gender, species, 
            type, status, episode } = singleCharacter;
        
        console.log('episode', episode);
        // данные не загружаются, нужно подождать ещё вложенные поля

        if (loading) {
            return <Spinner />
        }

        return (
            <div className='character-page__wrapper'>
                <header>
                    <div className='character-page__avatar'>
                        <img src={image} alt={name}/>
                    </div>
                    
                    <div className='character-page__description-section'>
                        <span className='character-page__description-name'>{name}</span>
                    </div>
                </header>
                <table className='character-page__description'>
                        <tbody>
                            <tr className='character-page__description-section'>
                                <td>Status:</td>
                                <td>{status}</td>
                            </tr>
                            <tr className='character-page__description-section'>
                                <td>Gender:</td>
                                <td>{gender}</td>
                            </tr>
                            <tr className='character-page__description-section'>
                                <td>Species:</td>
                                <td>{species}</td>
                            </tr>
                            {
                                type.length ? 
                                <tr className='character-page__description-section'>
                                    <td>Type:</td>
                                    <td>{type}</td>
                                </tr> : null
                            }
                        </tbody>
                </table>
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