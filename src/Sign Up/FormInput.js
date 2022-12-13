import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  background: #fff;
  height: 2.5rem;
  border: 0.0625rem solid #dbe3ff;
  border-radius: 0.625rem;
  margin: 0.625rem 0;
  align-items: center;
  align-content: center;
  display: flex;
`;

const Divider = styled.span`
  display: inline-block;
  width: 0;
  height: 1.25rem;
  border-left: 0.0625rem solid #dbe3ff;
  border-right: 0.0625rem solid #dbe3ff;
`;
const Icon = styled.img`
  padding: 0rem;
  margin: 0.3125rem;
`;

export const FormInput = ({ img, children }) => {
  return (
    <InputContainer>
      {img && <Icon src={img}></Icon>}
      <Divider></Divider>
      {children}
    </InputContainer>
  );
};
