import React, { Component } from 'react';
import { nanoid } from 'nanoid';

const INIT_CONTACTS = [
  {
    id: nanoid(),
    name: 'Pablo Emilio Escobar Gaviria',
    number: '044-000-00-00',
  },
  { id: nanoid(), name: 'Quentin Jerome Tarantino', number: '063-999-55-44' },
  { id: nanoid(), name: 'Валерій Фeдорович Залужний', number: '066-111-22-33' },
];

class App extends Component {
  state = {
    contacts: [...INIT_CONTACTS],
    name: '',
    number: '',
    filter: '',
  };

  ids = {
    inputNameId: nanoid(),
    inputTelId: nanoid(),
    inputFilterId: nanoid(),
  };

  handleChange = evt => {
    console.log(evt.currentTarget.name);
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name: evt.target.elements.name.value,
            number: evt.target.elements.number.value,
          },
        ],
      };
    });
  };

  render() {
    const { inputNameId, inputTelId, inputFilterId } = this.ids;
    const { name, number, filter } = this.state;
    const { contacts } = this.state;
    const filteredContacts = contacts.filter(({ id, name, number }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={inputNameId}>
            Name
            <input
              type="text"
              name="name"
              id={inputNameId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor={inputTelId}>
            Tel
            <input
              type="tel"
              name="number"
              id={inputTelId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>

        <form>
          <label htmlFor={inputFilterId}>
            Name
            <input
              type="text"
              name="filter"
              id={inputFilterId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={filter}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <ul>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name} - {number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
