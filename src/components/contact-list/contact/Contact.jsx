import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Contact = props => {
  const { name, number } = props;
  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
    </li>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
