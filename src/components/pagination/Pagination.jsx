import React from 'react';
import { Link } from 'react-router-dom';

import './Pagination.scss';

const Pagination = ({ currentPage }) => {
    return (
        <div className='pagination__wrapper'>
            <Link to={{
                pathname: "/characters",
                search: `?pages=${currentPage-1}`,
                state: { fromDashboard: true }
            }}>
                <span className='pagination__prev-button'></span>
            </Link>
                <span className='pagination__current-page'>{currentPage}</span>        
            <Link to={{
                pathname: "/characters",
                search: `?pages=${currentPage+1}`,
                state: { fromDashboard: true }
            }}>        
                <span className='pagination__next-button'></span>
            </Link>
        </div>
    )
};

export default Pagination;