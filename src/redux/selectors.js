import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterData) => {
    const normalizedFilter = filterData.toLowerCase();
    const filterContactsData = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filterContactsData;
  }
);
