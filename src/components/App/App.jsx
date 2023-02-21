import { Component } from 'react';
import { nanoid } from 'nanoid';
import { SectionForm } from '../SectionForm/SectionForm';
import { SectionContacts } from '../SectionContacts/SectionContacts';
import { Filter } from '../Filter/Filter';
import styles from './app.module.css';

const initialContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];
class App extends Component {
  state = {
    contacts: [...initialContacts],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    const existingContacts = contacts.map(({ name }) => name.toLowerCase());
    const nameToLowerCase = name.toLowerCase();

    if (existingContacts.includes(nameToLowerCase)) {
      return alert(`${name} is already in contacs.`);
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filterToLowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowerCase)
    );
  };

  onDeleteContact = deletedId => {
    console.log(deletedId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deletedId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Phone book</h2>
        <SectionForm onSubmit={this.addContact} />
        <h2 className={styles.title}>Contacts</h2>
        <div className={styles.contactListContainer}>
          <Filter inputValue={filter} onChange={this.onFilter} />
          <SectionContacts
            contacts={filteredContacts}
            onDelete={this.onDeleteContact}
          />
        </div>
      </div>
    );
  }
}

export { App };
