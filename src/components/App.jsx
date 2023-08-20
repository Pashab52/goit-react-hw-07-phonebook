import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

import css from './App.module.css'
import { useSelector } from 'react-redux';

import { getContacts } from "redux/selectors";




export function App() {

  const contacts = useSelector(getContacts);

 

  return (
    <div className={css.phoneContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <Filter/>

      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <ContactList
    
        />
      )}
    </div>
  );
};
