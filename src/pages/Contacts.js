import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { selectError, selectLoading } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import ContactForm from 'components/Form/ContactsForm';
import { ContactList } from 'components/List/ContactsList';
import { Box, Heading } from '@chakra-ui/react';

// import { ContactsTitle, PhonebookTitle, Wrapper } from './App.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      mx="auto"
      boxSize="fit-content"
      boxShadow="2xl"
      p="6"
      rounded="md"
      bg="white"
    >
      <Box>
        <Heading as="h1" size="lg" my="20px">
          Add contacts
        </Heading>
        <ContactForm />
      </Box>
      <Box>
        <Heading as="h2" size="lg" my="20px">
          Contacts
        </Heading>
        <Filter />
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        <ContactList />
      </Box>
    </Box>
  );
}
