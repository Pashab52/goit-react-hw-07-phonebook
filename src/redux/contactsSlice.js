import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './operations';

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
  // reducers: {
  //   addContact(state, action) {
  //     // state.contacts.push(action.payload);

  //     state.contacts.items = [...state.contacts.items, action.payload];
  //   },

  //   deleteContact(state, action) {
  //     state.contacts.items = state.contacts.items.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  //   setFilter(state, action) {
  //     state.filter = action.payload;
  //   },
  // },
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

    [addContact.pending]: handlePending,

    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = [...state.contacts.items, action.payload];
    
    },
    [addContact.rejected]: handleRejected,
  }
});

//  [fetchTasks.pending]: handlePending,
//     [fetchTasks.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchTasks.rejected]: handleRejected,
//     [addTask.pending]: handlePending,
//     [addTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addTask.rejected]: handleRejected,
//     [deleteTask.pending]: handlePending,
//     [deleteTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [deleteTask.rejected]: handleRejected,
//     [toggleCompleted.pending]: handlePending,
//     [toggleCompleted.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1, action.payload);
//     },
//     [toggleCompleted.rejected]: handleRejected,


export const { deleteContact, setFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;



