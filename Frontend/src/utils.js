/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
export const convertArrayToObject = (data) =>
  data.reduce((prev, next) => ({ ...prev, [next._id]: next }), {});

export const formatDate = (date) => {
  const d = new Date(date);
  const month = `0${d.getMonth() + 1}`.slice(-2);
  const day = `0${d.getDate()}`.slice(-2);
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
};
