/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import { EyeOutlined } from "@ant-design/icons";
import { Table } from "antd";
import propTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { setBooksByShelfId } from "../Actions/BookActions";
import { setShelfById } from "../Actions/shelfActions";
import { getBooksByShelfId } from "../APIs/BookApis";
import { getShelfById } from "../APIs/shelfApis";

function ShelfDetails(props) {
  const {
    shelfData, setBooksByShelf, books, match, setShelf,
  } = props;
  const shelfId = match?.params?.id;
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const fetchData = async () => {
    setLoading(true);

    if (shelfId) {
      if (!shelfData[shelfId]) {
        await getShelfById(shelfId)
          .then((res) => setShelf(res.data))
          .catch((err) => console.log(err));
      }
      await getBooksByShelfId(shelfId)
        .then((res) => setBooksByShelf(res.data))
        .catch((err) => console.log(err));
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const columns = [
    {
      title: "Book Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "Actions",
      key: "Actions",
      dataIndex: "Actions",
      render: (text, obj) => (
        <EyeOutlined onClick={() => history.push(`/book/${obj._id}/read`)} />
      ),
    },
  ];
  return (
    <div>
      <h1>
        {shelfData[shelfId]?.name}
        {" "}
        Books
      </h1>
      <Table
        columns={columns}
        dataSource={Object.values(books)}
        loading={loading}
      />
    </div>
  );
}
const mapStateToProps = (state) => ({
  shelfData: state.shelf.shelfData,
  books: state.books.booksData,
});
const mapDispatchToProps = (dispatch) => ({
  setShelf: (data) => dispatch(setShelfById(data)),
  setBooksByShelf: (data) => dispatch(setBooksByShelfId(data)),
});
ShelfDetails.propTypes = {
  match: propTypes.object.isRequired,
  setShelf: propTypes.func.isRequired,
  shelfData: propTypes.object.isRequired,
  setBooksByShelf: propTypes.func.isRequired,
  books: propTypes.object,
};
ShelfDetails.defaultProps = { books: {} };
export default connect(mapStateToProps, mapDispatchToProps)(ShelfDetails);
