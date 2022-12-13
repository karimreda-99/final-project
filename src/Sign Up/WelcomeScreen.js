import React from "react";
import { Card } from "./Card";
import placeholder from "../images/placeholder.png";
import { useNavigate } from "react-router-dom";

export const WelcomeScreen = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/signup");

  return (
    <Card
      image={placeholder}
      handelClick={() => handleClick()}
      Headline="Welcome"
      Subhead="We’re glad you’re here! Sign up to start"
      button={{ text: "sign up" }}
    ></Card>
  );
};
