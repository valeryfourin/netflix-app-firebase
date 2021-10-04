import PropTypes from 'prop-types';
import React from 'react';

import '../styles/Button.css';

export default function Pagination({ moviesPerPage, totalMovies, paginate }) {
  const pageNumbers = [];

  for (
    let index = 1;
    index <= Math.ceil(totalMovies / moviesPerPage);
    index += 1
  ) {
    pageNumbers.push(index);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={(event) => {
                event.preventDefault();
                paginate(number);
              }}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  moviesPerPage: PropTypes.number.isRequired,
  totalMovies: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
