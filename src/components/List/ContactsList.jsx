import { ContactItem } from '../ListItem/ContactsListItem';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteBtn, List, ListItem } from 'components/List/ContactsList.styled';
import { selectVisibleContact } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const useContacts = () => useSelector(selectVisibleContact);
  const visibleContacts = useContacts();

  return (
    <List>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactItem contact={contact} />
          <DeleteBtn onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </DeleteBtn>
        </ListItem>
      ))}
    </List>
  );
};
