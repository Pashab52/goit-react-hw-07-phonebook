import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';


export function ContactList() {

  const contacts = useSelector(getContacts);
  const filterData = useSelector(getFilter);


  function filterContacts() {
    const normalizedFilter = filterData.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
const filterContactsData = filterContacts();

  


    return (
      <ul className={CSS.contctList}>
        {filterContactsData.map(contact => {
          return (
            <ContactItem
              name={contact.name}
              number={contact.number}
              key={contact.id}
              id={contact.id}
            />
          );
        })}
      </ul>
    );
  }

