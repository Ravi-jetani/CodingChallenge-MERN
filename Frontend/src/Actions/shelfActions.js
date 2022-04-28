/* eslint-disable import/prefer-default-export */
import { SET_SHELF, SET_SHELF_BY_ID } from "../constants";

export const setShelf = (data) => ({
  type: SET_SHELF,
  data,
});
export const setShelfById = (data) => ({
  type: SET_SHELF_BY_ID,
  data,
});
