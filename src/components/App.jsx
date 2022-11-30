import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
// import initialContacts from './ContactList/initialContacts.json';
import Filter from './Filter/Filter';

import { Wrapper, Title, Title2, Title3 } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(getContacts); /// рендер пошуку якщо є данні
  return (
    <>
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm />
        <Title2>Contacts</Title2>
        <Title3>Find contact by name</Title3>

        {!!contacts.lengt && ( /// рендер пошуку якщо є данні
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </Wrapper>
    </>
  );
}
