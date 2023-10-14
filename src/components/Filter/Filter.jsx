import { FormLabel, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredContact } from 'redux/contacts/filtersSlice';
import { selectFilters } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectFilters);

  // const filterChange = e => {
  //   dispatch(filteredContact(e.target.value.trim()));
  // };

  const filterChange = ({ target: { value } }) => {
    dispatch(filteredContact(value));
  };

  return (
    <FormLabel>
      <Input
        type="text"
        value={searchQuery}
        onChange={filterChange}
        placeholder="Find contact by name"
      />
    </FormLabel>
  );
};
