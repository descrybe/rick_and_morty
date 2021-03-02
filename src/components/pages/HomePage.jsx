import React from 'react';
import Pagination from '../pagination/Pagination';
import CharacterList from '../characters-list/CharactersList';

const HomePage = ({ currentPage }) => {
    return (
        <div>
            <Pagination currentPage={currentPage}/>
            <div>
                <CharacterList currentPage={currentPage}/>
            </div>
        </div>
    );
};

export default HomePage;