// import { useState} from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

import css from './App.module.css'
import { useSelector } from 'react-redux';

import { getContacts } from "redux/selectors";


// const defContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export function App() {
  // const [contacts, setContacts] = useState(defContacts);
  // const [filter, setFilter] = useState('');

  // const firstRender = useRef(true)

// const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

    

// dispatch(addContact({ id: 123, title: 'Hello World' }));
// console.log(addContact({ id: 123, title: 'Hello World' }));

  // useLayoutEffect(() => {
  //   try {
  //     const contactsJSON = localStorage.getItem('contacts');

  //     if (contactsJSON) {
  //       const localContacts = JSON.parse(contactsJSON);

  //       console.log(localContacts);
  //       dispatch(addContact(localContacts));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   if (firstRender.current) {
  //     // console.log('рендер 1', contacts);
  //     firstRender.current = false;
  //     return
  //   }
    
  //     // console.log('запис зі стейту в ЛХ');
  //     localStorage.setItem('contacts', JSON.stringify(contacts));

  //   },
  //   [contacts]
  // );



  // const onFormSubmit = newContact => {
  //   const copyNewContact = { ...newContact };

  //   copyNewContact.id = nanoid();

  //   dispatch(addContact(copyNewContact));
  // };

  // const onFilterChange = filterWord => {
  //   setFilter(filterWord);
  // };



  // const deleteContactData = id => {
  //   dispatch(deleteContact(id));
  // };
 

  return (
    <div className={css.phoneContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <Filter/>

      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <ContactList
          // contacts={filterContacts()}
          // OnBtnDelClick={deleteContactData}
        />
      )}
    </div>
  );
};
