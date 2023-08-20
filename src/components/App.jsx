import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Loader } from "./Loader/Loader";
import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux';

import { getContacts, getError, getIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";




export function App() {

  const contacts = useSelector(getContacts);
   const isLoading = useSelector(getIsLoading);
   const error = useSelector(getError);
  const dispatch = useDispatch()

// console.log(contacts)

  
  useEffect(() => {

    dispatch(fetchContacts());

  }, [dispatch]);
 

  return (
    <div className={css.phoneContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <Filter />

      <h2>Contacts</h2>
      {error && <p>Contacts not found</p>}
      {isLoading ? <Loader /> : <ContactList />}
    </div>
  );
};
