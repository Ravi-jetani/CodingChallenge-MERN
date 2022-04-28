/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-return-await */
import axios from "axios";

export const getShelf = async () =>
  await axios
    .get("http://localhost:3100/getShelfList")
    .then((res) => res)
    .catch((err) => {
      console.log(err);
      return err;
    });
export const getShelfById = async (id) =>
  await axios
    .get(`http://localhost:3100/getShelf?shelfId=${id}`)
    .then((res) => res)
    .catch((err) => {
      console.log(err);
      return err;
    });
