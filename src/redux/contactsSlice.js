import { createSlice } from '@reduxjs/toolkit';
import { deleteContact, fetchContacts, addContact} from "./operations"

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
  
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(contact => {
        return contact.id !== action.meta.arg;
      });

    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending]:(state) =>{
      state.isLoading = true;
    },
    [addContact.fulfilled]:(state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(payload);
    },
    [addContact.rejected]:(state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});




export const contactsReducer = contactsSlice.reducer;
