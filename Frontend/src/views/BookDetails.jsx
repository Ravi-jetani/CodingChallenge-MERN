/* eslint-disable react/forbid-prop-types */
import { Card } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import styled from "styled-components";
import { getBookById } from "../APIs/BookApis";
import { setBookById } from "../Actions/BookActions";
import { formatDate } from "../utils";

const BookContainer = styled.div`
padding: 20px;
background: gray;
position: absolute;
margin:auto;

`;

function BookDetails(props) {
  const { setBook, books, match } = props;
  const bookId = match?.params?.id;

  const fetchBookData = async () => {
    if (bookId && !books[bookId]) {
      await getBookById(bookId)
        .then((res) => setBook(res.data))
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    fetchBookData();
  }, []);
  return (
    <>
      <h2>Book Detail</h2>
      <BookContainer>
        {bookId && books[bookId] ? (
          <Card title={books[bookId].title} bordered={false} style={{ width: 300 }}>
            <p>
              {" "}
              Created Date
              {" "}
              {formatDate(books[bookId].createdAt)}
            </p>
            <p>
              {" "}
              Updated Date
              {" "}
              {formatDate(books[bookId].updatedAt)}
            </p>
          </Card>
        ) : <h2>No book found</h2> }

      </BookContainer>
    </>
  );
}
const mapStateToProps = (state) => ({ books: state.books.booksData });
const mapDispatchToProps = (dispatch) => ({ setBook: (data) => dispatch(setBookById(data)) });
BookDetails.propTypes = {
  match: propTypes.object.isRequired,
  setBook: propTypes.func.isRequired,
  books: propTypes.object,
};
BookDetails.defaultProps = { books: {} };
export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
