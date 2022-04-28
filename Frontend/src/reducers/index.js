/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import { combineReducers } from "redux";
import { convertArrayToObject } from "../utils";
import {
  SET_BOOKS_BY_SHELF_ID,
  SET_BOOK_BY_ID,
  SET_SHELF,
  SET_SHELF_BY_ID,
} from "../constants";

// eslint-disable-next-line no-unused-vars
const initialStateShelf = {
  shelfData: {},
};
const initialStateBooks = {
  booksData: {},
};
const booksReducer = (state = initialStateBooks, action) => {
  switch (action.type) {
    case SET_BOOKS_BY_SHELF_ID:
      const object = convertArrayToObject(action.data);
      return { ...state, booksData: object };
    case SET_BOOK_BY_ID:
      return {
        ...state,
        booksData: { ...state.booksData, [action.data._id]: action.data },
      };
    default:
      return state;
  }
};
const shelfReducer = (state = initialStateShelf, action) => {
  switch (action.type) {
    case SET_SHELF:
      const object = convertArrayToObject(action.data);
      return { ...state, shelfData: object };
    case SET_SHELF_BY_ID:
      return {
        ...state,
        shelfData: { ...state.shelfData, [action.data._id]: action.data },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  books: booksReducer,
  shelf: shelfReducer,
});

export default rootReducer;
