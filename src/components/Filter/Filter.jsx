import { useDispatch, useSelector } from 'react-redux';
import { filteredContact } from 'redux/contacts/filtersSlice';
import { selectFilters } from 'redux/contacts/selectors';
import { FilterInput, FilterLable } from './Filter.styled';

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
    <FilterLable>
      Find contacts by name
      <FilterInput type="text" value={searchQuery} onChange={filterChange} />
    </FilterLable>
  );
};
