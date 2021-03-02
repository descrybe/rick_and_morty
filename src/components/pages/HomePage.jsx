import React from 'react';
import Pagination from '../pagination/Pagination';
import CharacterListContainer from '../characters-list/CharacterListContainer';

const HomePage = ({ currentPage }) => {
    return (
        <div>
            <Pagination currentPage={currentPage}/>
            <div>
                <CharacterListContainer currentPage={currentPage}/>
            </div>
        </div>
    );
};

export default HomePage;