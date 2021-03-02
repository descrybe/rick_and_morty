import React, { Component } from 'react';
import { connect } from 'react-redux';

import { singleCharacterLoaded } from '../../actions';
import withCharactersService from '../hoc/with-characters-service';
import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

import './CharacterPage.scss';

const CharacterDescription = ({ singleCharacter }) => {
    const { name, image, gender, species, 
        status, episode } = singleCharacter;
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
                    </tbody>
            </table>
        </div>
    );
}
class CharacterPage extends Component {
    componentDidMount() {
        this.props.fetchSingleCharacter();
    };

    render() {
        const { singleCharacter, loading, error } = this.props;
        
        // console.log('episode', episode);
        // данные не загружаются, нужно подождать ещё вложенные поля

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }        

        return <CharacterDescription singleCharacter={singleCharacter}/>
    }
};

const mapStateToProps = ({ singleCharacter, loading, error }) => {
    return { singleCharacter, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => { 
    return {
        fetchSingleCharacter: () => {
            const { characterId, charactersService } = ownProps;

            charactersService
                .getCharacterById(characterId)
                .then(res => {
                    console.log(res);
                    dispatch(singleCharacterLoaded(res));
                });
        }
    }
};

export default withCharactersService()(
    connect(mapStateToProps, mapDispatchToProps)(CharacterPage)
);