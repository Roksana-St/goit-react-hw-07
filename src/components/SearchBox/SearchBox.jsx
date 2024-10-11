import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;


