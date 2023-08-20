import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://64e0d1df50713530432cb7f7.mockapi.io/';
export const fetchTasks = createAsyncThunk('tasks/fetchAll', async () => {
  const response = await axios.get('/tasks');
  return response.data;
});
