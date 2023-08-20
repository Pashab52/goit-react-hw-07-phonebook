import { createSlice } from '@reduxjs/toolkit';

const phonebookInitialState = {
  contacts: {
   items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
    isLoading: false,
    error: null,
  },
  filter: '',
};
console.log(phonebookInitialState.contacts.items);

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitialState,
  reducers: {
    addContact(state, action) {
      // state.contacts.push(action.payload);

      state.contacts.items = [...state.contacts.items, action.payload];
    },

    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});



export const { addContact, deleteContact, setFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;



