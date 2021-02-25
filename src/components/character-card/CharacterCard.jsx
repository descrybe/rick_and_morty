import React from 'react';
import './CharacterCard.scss';

const CharacterCard = ({ character }) => {
    const { image, name, gender, species } = character;
    
    return (
        <article className='character-card'>
            <div className='character-card__avatar'>
                <img src={image} alt={name}/>
            </div>
                <div className='character-card__description'>
                    <div className='character-card__description-section'>
                        <span className='character-card__description-name'>{name}</span>
                    </div>
                    <div className='character-card__description-section'>
                        <p>Gender:</p>
                        <span>{gender}</span>
                    </div>
                    <div className='character-card__description-section'>
                        <p>Species:</p>
                        <span>{species}</span>
                    </div>
                </div>
        </article>
    )
};

export default CharacterCard;