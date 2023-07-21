import React from "react";
import { styled } from "styled-components";

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background-color: #004aad;
  color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  border: none;
`;
