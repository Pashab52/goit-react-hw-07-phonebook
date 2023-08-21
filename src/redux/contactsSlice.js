import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const phonebookInitialState = {
  contacts: {
   items: [
      // { id: 'id-1d', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2d', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3d', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4d', name: 'Annie Copeland', number: '227-91-26' },
  ],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitialState,
  reducers: {
    // addContact(state, action) {
    //   // state.contacts.push(action.payload);

    //   state.contacts.items = [...state.contacts.items, action.payload];
    // },

    // deleteContact(state, action) {
    //   state.contacts.items = state.contacts.items.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    // [fetchContacts.fulfilled](state, action) {
    //   state.contacts.items = [...state.contacts.items, ...action.payload];
    // },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = [...action.payload];
    },
    [fetchContacts.rejected]: handleRejected,

    // [addContact.pending]: handlePending,

    [addContact.fulfilled](state, action) {
      // state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = [action.payload,...state.contacts.items];
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});




export const { setFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;



