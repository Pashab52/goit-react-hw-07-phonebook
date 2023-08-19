import PropTypes from 'prop-types';
import css from './ContactItem.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';


export function ContactItem (props) {
  const dispatch = useDispatch();
  
    return (
      <li className={css.contactItem}>
        <p>
          {props.name}: {props.number}
        </p>
        <button
          type="button"
          onClick={() => dispatch(deleteContact(props.id))}
        >
          X
        </button>
      </li>
    );
  }

 ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };