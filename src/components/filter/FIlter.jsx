import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Label, FilterTitle, FilterInput } from './Filter.styled';

const Filter = props => {
  const inputFilterId = nanoid();
  const { filter, onChange } = props;
  return (
    <Label htmlFor={inputFilterId}>
      <FilterTitle>Filter by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        id={inputFilterId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={onChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
