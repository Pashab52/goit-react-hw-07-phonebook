import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const phonebookInitialState = {
  contacts: {
    items: [
      // Не виходить додавати в InitialState початковий масив контактів. Йде подвійний запит на сервер, і викидує помилку про однакові ключі при рендері. Ніяк не розібрався із тим(((
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

const handleFulfilled = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
}

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },

 

  extraReducers: builder =>
  {
    builder
      // .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        handleFulfilled(state);


        // Не виходить додавати в InitialState початковий масив контактів. Йде подвійний запит на сервер, і викидує помилку про однакові ключі при рендері. Ніяк не розібрався із тим(((
        // state.contacts.items = [...state.contacts.items, ...action.payload];

        state.contacts.items = [...action.payload];
      })
      // .addCase(fetchContacts.rejected, handleRejected)

      // .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.contacts.items = [action.payload, ...state.contacts.items];
      })
      // .addCase(addContact.rejected, handleRejected)

      // .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      // .addCase(deleteContact.rejected, handleRejected)

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});

export const { setFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;

