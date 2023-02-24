import React, { Component } from 'react';
import ContactForm from 'components/contact-form/ContactForm';
import Filter from 'components/filter/FIlter';
import ContactList from 'components/contact-list/ContactList';
import { Layout, MainTitle, SecondaryTitle, GlobalStyles } from '.';

class App extends Component {
  state = {
    contacts: [],
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
        <Layout>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm insertContact={this.insertContact} />

          <SecondaryTitle>Contacts</SecondaryTitle>
          <Filter filter={filter} onChange={this.handleChange} />
          <ContactList renderData={renderData} onDelete={this.deleteContact} />
        </Layout>
        <GlobalStyles />
      </>
    );
  }
}

export default App;
