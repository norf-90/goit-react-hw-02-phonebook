import React from 'react';
import PropTypes from 'prop-types';

const Contact = props => {
  const { name, number, onDelete } = props;

  const onClick = () => {
    onDelete(name);
  };

  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
