import React from 'react';
import Pagination from '../pagination/Pagination';
import CharacterList from '../characters-list/CharactersList';

const HomePage = ({ currentPage }) => {
    return (
        <div>
            <Pagination />
            <div>
                <CharacterList currentPage={currentPage}/>
            </div>
            <Pagination />
        </div>
    );
};

export default HomePage;