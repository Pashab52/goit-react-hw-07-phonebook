
// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/contactsSlice';
import { useSelector, useDispatch} from 'react-redux';

  
export function Filter() {
const filterData = useSelector(getFilter)
  const dispatch = useDispatch();

  function handleFilterChange(event) {
    dispatch(setFilter(event.currentTarget.value))
  }
 
    return (
      <div className={css.filter}>
        <label>
          Find contacts by name <br />
          <input
            type="text"
            name="name"
            value={filterData}
            onChange={handleFilterChange}
          />
        </label>
      </div>
    );
}
  


