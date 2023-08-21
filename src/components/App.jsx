import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Loader } from "./Loader/Loader";
import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux';

import { selectError, selectIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";




export function App() {

  // const contacts = useSelector(getContacts);
   const isLoading = useSelector(selectIsLoading);
   const error = useSelector(selectError);
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

      <div className={css.contactsTitleWrap}>
        <h2 className={css.contactsTitle}>Contacts</h2>
        {isLoading &&  <Loader/>}
      </div>
      {error && <p>Contacts not found</p>}

      <ContactList />
    </div>
  );
};
