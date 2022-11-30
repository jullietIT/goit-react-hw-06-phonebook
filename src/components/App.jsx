import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
// import initialContacts from './ContactList/initialContacts.json';
import Filter from './Filter/Filter';

import { Wrapper, Title, Title2, Title3 } from './App.styled';

export default function App() {
  return (
    <>
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm />

        <Title2>Contacts</Title2>
        <Title3>Find contact by name</Title3>

        <Filter />
        <ContactList />
      </Wrapper>
    </>
  );
}
