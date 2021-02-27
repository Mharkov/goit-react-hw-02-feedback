import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
      <h2> Statistics </h2>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
