/* eslint-disable react/forbid-prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EyeOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { getShelf } from "../APIs/shelfApis";
import { setShelf } from "../Actions/shelfActions";

function Home(props) {
  const history = useHistory();
  const { shelfData, setShelfData } = props;
  const Header = styled.h2`
    color: red;
    font-size: 2rem;
  `;
  const fetchShelf = async () => {
    await getShelf()
      .then((res) => setShelfData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchShelf();
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
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
        <EyeOutlined onClick={() => history.push(`/shelf/${obj._id}/read`)} />
      ),
    },
  ];

  return (
    <>
      <Header>Shelf list</Header>
      <Table columns={columns} dataSource={Object.values(shelfData)} />
    </>
  );
}
const mapStateToProps = (state) => ({
  shelfData: state.shelf.shelfData,
});
const mapDispatchToProps = (dispatch) => ({
  setShelfData: (data) => dispatch(setShelf(data)),
});
Home.propTypes = {
  setShelfData: propTypes.func.isRequired,
  shelfData: propTypes.object,
};
Home.defaultProps = {
  shelfData: {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
