/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/no-keyword-prefix */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';

import '../styles/Button.css';

export default function Button(properties) {
  return (
    <button
      type="button"
      className="action-button"
      aria-label={properties.text}
      {...properties}
    >
      {properties.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
