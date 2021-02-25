import React from 'react';
import CharacterList from '../characters-list/CharactersList';

const HomePage = () => {
    const testData = [
        {
            id: 1,
            name: "Rick Sanchez",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        },
        {
            id: 2,
            name: "Morty Smith",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        }
    ]
    return (
        <div>
            <div>
                <CharacterList characters={testData}/>
            </div>
        </div>
    );
};

export default HomePage;