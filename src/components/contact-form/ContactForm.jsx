import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Label,
  InputTitle,
  Input,
  SubmitBtn,
} from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  ids = {
    inputNameId: nanoid(),
    inputTelId: nanoid(),
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log('i am in contactform');
    const { name, number } = this.state;
    const contact = { id: nanoid(), name: name, number: number };
    this.props.insertContact(contact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { inputNameId, inputTelId } = this.ids;
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Label htmlFor={inputNameId}>
          <InputTitle>Name</InputTitle>
          <Input
            type="text"
            name="name"
            id={inputNameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Brendan Eich"
            required
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label htmlFor={inputTelId}>
          <InputTitle>Tel</InputTitle>
          <Input
            type="tel"
            name="number"
            id={inputTelId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="063-111-22-33"
            value={number}
            onChange={this.handleChange}
          />
        </Label>

        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </form>
    );
  }
}

ContactForm.propTypes = {
  insertContact: PropTypes.func.isRequired,
};
