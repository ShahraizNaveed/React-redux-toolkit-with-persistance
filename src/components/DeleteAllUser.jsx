import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { clearAllUsers } from "../actions";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteUsers = () => {
    dispatch(clearAllUsers());
  }

  return <Wrapper>
    <button className="btn clear-btn" onClick={deleteUsers}>Clear All Users</button>
  </Wrapper>;
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }

`