import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { selectError, selectLoading } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import ContactForm from 'components/Form/ContactsForm';
import { ContactList } from 'components/List/ContactsList';

// import { ContactsTitle, PhonebookTitle, Wrapper } from './App.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
}
