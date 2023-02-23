import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/contact-form/ContactForm';
import Filter from 'components/filter/FIlter';
import ContactList from 'components/contact-list/ContactList';

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
    filter: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  updateContacts = contact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  filterContacts = () => {
    const { filter } = this.state;
    const { contacts } = this.state;
    return contacts.filter(({ name }) => {
      return name.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
    });
  };

  render() {
    const { filter } = this.state;
    const renderData = this.filterContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm updateContacts={this.updateContacts} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleChange} />
        <ContactList renderData={renderData} />
      </>
    );
  }
}

export default App;
