import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './Filter/Filter';
import SectionForm from './SectionForm/SectionForm';
import { useGetContactsQuery } from 'redux/contactsApi';

function App() {
  const { data: contacts, isLoading } = useGetContactsQuery();

  return (
    <SectionForm>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      {contacts?.length > 0 && (
        <>
          <ContactFilter />
        </>
      )}
      {isLoading && <p>Loading...</p>}
      {contacts?.length === 0 && !isLoading && <p>Contact List is empty</p>}
      <ContactList />
    </SectionForm>
  );
}

export default App;
