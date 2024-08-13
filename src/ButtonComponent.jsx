import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #fc0;
  color: #333;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #e6b800;
  }
`;

function ButtonComponent({ type, onClick, children }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default ButtonComponent;