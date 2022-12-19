import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { SectionForm } from './SectionForm/SectionForm';
import { useSelector } from 'react-redux';
import { selectedContacts } from 'redux/contactSlice';

export const App = () => {
  const contacts = useSelector(selectedContacts);

  return (
    <SectionForm>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />

      {contacts.length > 0 ? (
        <>
          <ContactList />
        </>
      ) : (
        <p>Your phonebook is empty.</p>
      )}
    </SectionForm>
  );
};
