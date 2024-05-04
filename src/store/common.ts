import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  modalState: false,
  deleteModalState: false,
  editModalState: false,
  bookId: null,
  books: [],
};

let name = "common";

export const {
  reducer: commonReducers,
  actions: {
    toggleModal,
    toggleDeleteModal,
    toggleEditModal,
    toggleBookId,
    toggleBooks,
  },
} = createSlice({
  initialState,
  name,
  reducers: {
    toggleModal(state, action) {
      state.modalState = action.payload;
    },
    toggleDeleteModal(state, action) {
      state.deleteModalState = action.payload;
    },
    toggleEditModal(state, action) {
      state.editModalState = action.payload;
    },
    toggleBookId(state, action) {
      state.bookId = action.payload;
    },
    toggleBooks(state, action) {
      state.books = action.payload;
    },
  },
});
