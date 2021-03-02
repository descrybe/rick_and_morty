import React from 'react';

import './Pagination.scss';

const Pagination = ({ currentPage }) => {
    return <div className='pagination__wrapper'>
        <span className='pagination__prev-button'></span>
        <span className='pagination__current-page'>{currentPage}</span>
        <span className='pagination__next-button'></span>
    </div>
};

export default Pagination;