import { ContactItem } from '../ListItem/ContactsListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContact } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Button, Card, CardBody, Flex, List } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export const ContactList = () => {
  const dispatch = useDispatch();

  const useContacts = () => useSelector(selectVisibleContact);
  const visibleContacts = useContacts();

  return (
    <List>
      {visibleContacts.map(contact => (
        <Card mb="7px" size="sm" variant="outline" color="#3546AB">
          <CardBody>
            <Flex key={contact.id} justifyContent="space-between" gap="70px">
              <ContactItem contact={contact} />
              <Button
                colorScheme="orange"
                variant="ghost"
                leftIcon={<DeleteIcon />}
                onClick={() => dispatch(deleteContact(contact.id))}
              ></Button>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </List>
  );
};
