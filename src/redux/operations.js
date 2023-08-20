import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';



axios.defaults.baseURL = 'https://64e0d1df50713530432cb7f7.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
 
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      console.log(response)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const fetchTasks = createAsyncThunk(
//   'tasks/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/tasks');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );