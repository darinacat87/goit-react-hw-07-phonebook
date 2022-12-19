import { FilterLabel, FilterText, FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectedFilter, filter } from 'redux/contactSlice';

export const Filter = () => {
  const filterValue = useSelector(selectedFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <FilterLabel>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput
          placeholder="Rosie Simpson"
          type="text"
          name="filter"
          value={filterValue}
          onChange={e => dispatch(filter(e.currentTarget.value.trim()))}
        />
      </FilterLabel>
    </div>
  );
};
