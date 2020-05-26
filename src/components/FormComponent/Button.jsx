import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
    outline: none;
    border: 1px solid #ddd;
    // border-radius: 30px;
    padding: 1rem;
    width: 100%;
    margin: 1rem 0;
    cursor: pointer;
    color: #fff;
    font-size: 18px;
    transition: 0.3s ease;
    display: flex;
    justify-content: center;
    text-decoration: none !important;
    &:hover{
        
        background: #fff;
        border: 1px solid #1e90ff;
        color: #1e90ff;
    }

    // background: ${(props) => props.color};
    background: #1e90ff;

    ${(props) =>
      props.type === "Edit"
        ? css`
            background: #2e9e4e;
            border-radius: 0;
            padding: 8px 12px;
            font-size: 16px;
            &:hover {
              border: 1px solid #2e9e4e;
              color: #2e9e4d;
            }
          `
        : null}

    ${(props) =>
      props.type === "Delete"
        ? css`
            background: #d14949;
            border-radius: 0;
            padding: 8px 12px;
            font-size: 16px;
            &:hover {
              border: 1px solid #d14949;
              color: #d14949;
            }
          `
        : null}
`;

const ButtonUI = (props) => {
  return (
    <Button
      color={props.color}
      type={props.text}
      onClick={props.handleClick}
    >
      {props.text}
    </Button>
  );
};

export default ButtonUI;
