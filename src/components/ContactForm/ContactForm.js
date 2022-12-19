import React, { useState } from 'react';
import { Form, Label, Text, Input, AddContactBtn } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { pushContact, selectedContacts } from 'redux/contactSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectedContacts);
  const [formInput, setFormInput] = useState({
    name: '',
    number: '',
  });

  const { name, number } = formInput;
  const addContact = ({ name, number }) => {
    const id = nanoid();
    const contactItem = {
      id,
      name,
      number,
    };
    console.log(name);

    contacts.some(contact => contact.name?.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already exist in contacts`)
      : dispatch(pushContact(contactItem));
  };

  const handleNameInput = event => {
    const { name, value } = event.currentTarget;
    setFormInput(state => ({ ...state, [name]: value }));
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    addContact({ name, number });
    setFormInput({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Label>
        <Text>Name</Text>
        <Input
          placeholder="Rosie Simpson"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleNameInput}
          value={name}
        />
      </Label>

      <Label>
        <Text>Number</Text>
        <Input
          placeholder=" XXX-XX-XX"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNameInput}
          value={number}
        />
      </Label>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </Form>
  );
};
