import React from 'react';

const CharacterPage = ({ image, name, gender, status, species, lastLocation }) => {
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
};

export default CharacterPage;