import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import './style.css'

const propTypes = {
    onClick: PropTypes.func.isRequired,
    pageCount: PropTypes.number.isRequired,
};

const defaultProps = {};

function Pagination(props) {
    const { pageCount, onClick } = props;

    return (
        <ReactPaginate
            previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
            nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
            breakLabel="..."
            breakClassName="break-me"
            pageCount={pageCount}
            marginPagesDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={onClick}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
        />
    );
}

export default Pagination;

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
