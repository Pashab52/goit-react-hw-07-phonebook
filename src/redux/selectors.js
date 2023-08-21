export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilterContacts = state => {
  const contacts = selectContacts(state);
  const filterData = selectFilter(state);
  const normalizedFilter = filterData.toLowerCase();
  const filterContactsData = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return filterContactsData;
};
