import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  box-sizing: "border-box";
  min-width: 200px;
  min-height: 36px;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1.2rem;
  text-align: center;
  background-color: yellow;
  box-shadow: 0px 0px 1px 1px #eeeeee;
  font-weight: 600;
  &:hover {
    background-color: blue;
    color: white;
    box-shadow: 0px 0px 1px 2px #eeeeee;
    font-size: 1.2rem;
    animation: fade 1s;
  }
  @keyframes fade {
    0% {
      background-color: yellow;
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      background-color: blue;
    }
  }
`;
const Button = props => {
  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
