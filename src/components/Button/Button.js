import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ nextPage }) => {
  return (
    <button type="button" onClick={() => nextPage()} className={css.button}>
      Load More
    </button>
  );
};

Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
};

export default Button;
