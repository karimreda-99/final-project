import React from "react";
import styled from "styled-components";

const CardContainer = styled.section`
  width: calc(100vw - 25rem);
  display: flex;
  gap: 3.75rem;
  margin: 6.25rem auto;
  padding: 3.75rem;
  background: rgba(245, 247, 255, 0.85);
  border-radius: 0.625rem;
  @media (max-width: 768px) {
    width: auto;
    margin: 0 auto;
    padding: 10vw;
    flex-direction: column;
    background: unset;
  }
`;
const CardImg = styled.img`
  width: 19.6875rem;
  @media (max-width: 768px) {
    width: 13.6875rem;
    height: 50%;
    margin: 0 auto;
  }
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  align-content: space-around;
  padding: 0rem;
  gap: 1.875rem;
  @media (max-width: 768px) {
    align-content: center;
    text-align: center;
    gap: 1rem;
  }
`;

const CardHeadline = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  margin: 0;
`;
const CardSubhead = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 160%;
  margin: 0;
`;
export const CardButton = styled.button`
  all: unset;
  outline: inherit;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: calc(100% - 6.25rem);
  padding: 0rem 3.125rem;
  height: 2.5rem;
  background: linear-gradient(113.87deg, #2663df 14.81%, #758ff0 88.76%);
  box-shadow: 0rem 0.375rem 1.125rem #9cadf2;
  border-radius: 0.625rem;
  color: #fff;
  cursor: pointer;
`;

export const Card = ({
  Headline,
  Subhead,
  handelClick,
  image,
  button,
  children,
}) => {
  return (
    <CardContainer>
      <CardImg src={image} />

      <CardContent>
        <CardHeadline>{Headline} </CardHeadline>
        <CardSubhead>{Subhead}</CardSubhead>
        {children}
        {button && <CardButton onClick={handelClick}>{button.text}</CardButton>}
      </CardContent>
    </CardContainer>
  );
};
