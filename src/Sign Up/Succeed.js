import React from "react";
import { Card } from "./Card";
import placeholder from "../images/placeholder.png";

export const Succeed = () => {
  return (
    <Card
      image={placeholder}
      Headline="Successfully logged in"
      Subhead={`${localStorage.getItem("email")}`}
    />
  );
};
