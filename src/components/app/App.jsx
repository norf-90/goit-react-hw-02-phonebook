import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/contact-form/ContactForm';
import Filter from 'components/filter/FIlter';
import ContactList from 'components/contact-list/ContactList';

const INIT_CONTACTS = [
  { id: nanoid(), name: 'Pablo Emilio Escobar', number: '111-111-11-11' },
  { id: nanoid(), name: 'Quentin Jerome Tarantino', number: '333-333-33-33' },
  { id: nanoid(), name: 'ValeriiZaluzhnyi', number: '555-55-55-55' },
  { id: nanoid(), name: 'Tutankhamun', number: '777-777-77-77' },
  { id: nanoid(), name: 'Brendan Eich', number: '999-999-99-99' },
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

  insertContact = newContact => {
    const { contacts } = this.state;
    const isNameAlreadyExist = Boolean(
      contacts.find(contact => contact.name === newContact.name)
    );

    if (isNameAlreadyExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
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

  deleteContact = name => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.name !== name);
    this.setState({ contacts: newContacts });
  };

  render() {
    const { filter } = this.state;
    const renderData = this.filterContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm updateContacts={this.insertContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleChange} />
        <ContactList renderData={renderData} onDelete={this.deleteContact} />
      </>
    );
  }
}

export default App;
