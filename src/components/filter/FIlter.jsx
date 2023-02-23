import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Filter = props => {
  const inputFilterId = nanoid();
  const { filter, onChange } = props;
  return (
    <label htmlFor={inputFilterId}>
      Filter by name
      <input
        type="text"
        name="filter"
        id={inputFilterId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
