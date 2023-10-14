import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/contacts/selectors';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    // dispatch(addContact({ name, number, id: nanoid() }));

    contacts.find(
      contact =>
        form.elements.name.value.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${form.elements.name.value} is already in contacts`)
      : dispatch(addContact({ name, number, id: nanoid() }));

    setName('');
    setNumber('');
  };

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  };
  return (
    <FormControl>
      <form onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <Input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
            placeholder="Write contact's name"
          />
        </FormLabel>
        <FormLabel>
          Number
          <InputGroup>
            <InputLeftAddon children="+380" />
            <Input
              type="tel"
              name="number"
              placeholder="phone number"
              onChange={handleChange}
              value={number}
            />
          </InputGroup>
        </FormLabel>
        <Button type="submit">Add</Button>
      </form>
    </FormControl>
  );
}

// <Input
//   type="tel"
//   name="number"
//   // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//   required
//   onChange={handleChange}
//   value={number}
//   placeholder="Write contact's number"
// />;
