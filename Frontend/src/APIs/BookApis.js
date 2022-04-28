/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-return-await */
import axios from "axios";

export const getBooksByShelfId = async (id) =>
  await axios
    .get(`http://localhost:3100/getBooksByShelfId?shelfId=${id}`)
    .then((res) => res)
    .catch((err) => {
      console.log(err);
      return err;
    });

export const getBookById = async (id) =>
  await axios
    .get(`http://localhost:3100/getBookById?bookId=${id}`)
    .then((res) => res)
    .catch((err) => {
      console.log(err);
      return err;
    });
