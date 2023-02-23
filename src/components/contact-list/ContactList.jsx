import React from 'react';
import PropTypes from 'prop-types';
import Contact from './contact/Contact';

const ContactList = props => {
  const { renderData } = props;
  return (
    <ul>
      {renderData.map(({ id, name, number }) => {
        return <Contact key={id} name={name} number={number} />;
      })}
    </ul>
  );
};

ContactList.propTypes = {
  renderData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
