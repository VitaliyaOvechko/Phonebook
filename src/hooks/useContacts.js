import { useSelector } from 'react-redux';
import { selectVisibleContact } from 'redux/contacts/selectors';

export const useContacts = () => useSelector(selectVisibleContact);
