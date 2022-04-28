import { SET_BOOKS_BY_SHELF_ID, SET_BOOK_BY_ID } from "../constants";

export const setBooksByShelfId = (data) => ({
  type: SET_BOOKS_BY_SHELF_ID,
  data,
});

export const setBookById = (data) => ({
  type: SET_BOOK_BY_ID,
  data,
});
