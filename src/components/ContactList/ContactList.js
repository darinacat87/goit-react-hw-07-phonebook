import { ContactPhonebook } from 'components/ContactPhonebook/ContactPhonebook';
import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectedContacts,
  deleteContact,
  selectedFilter,
} from 'redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(selectedContacts);
  const filter = useSelector(selectedFilter);
  const dispatch = useDispatch();

  const filterContactList = () => {
    const normalizedValue = filter.toLowerCase();
    console.log(contacts);

    return contacts.filter(contact =>
      contact.name?.toLowerCase().includes(normalizedValue)
    );
  };

  return (
    <List>
      {filterContactList().map(({ name, id, number }) => {
        return (
          <ContactPhonebook
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteBtn={() => dispatch(deleteContact(id))}
          />
        );
      })}
    </List>
  );
};
