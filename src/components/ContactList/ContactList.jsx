import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import {
  selectFilterContacts,
} from 'redux/selectors';


export function ContactList() {

  const filterContactsData = useSelector(selectFilterContacts);



//   function filterContacts() {
//     const normalizedFilter = filterData.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// const filterContactsData = filterContacts();

 


    return (
      <ul className={CSS.contctList}>
        {filterContactsData.map(contact => {
               return (
                 <ContactItem
                   name={contact.name}
                   number={contact.number}
                   key={contact.id}
                   id={contact.id}
                   ids={contact.id}
                 />
               );
          })}
      </ul>
    );
  }

