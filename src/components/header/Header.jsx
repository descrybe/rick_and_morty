import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
        <header className='app-header'>
            <Link to='/characters?page=1'>          
                <span>Rich and Morty redux app</span>
            </Link>
        </header>
    );
};

export default Header;