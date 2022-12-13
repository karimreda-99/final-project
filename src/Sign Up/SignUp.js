import React, { useState, useEffect, useRef, Children } from "react";
import { Card, CardButton } from "./Card";
import formPlaceholder from "../images/FormPlaceholder.png";
import styled from "styled-components";
import EnvelopeSimple from "../images/icons/EnvelopeSimple.png";
import LockKey from "../images/icons/LockKey.png";
import User from "../images/icons/User.png";
import { useNavigate } from "react-router-dom";
import { FormInput } from "./FormInput";

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  align-content: space-around;
  padding: 0rem;
`;

const SignUpInput = styled.input`
  all: unset;
  margin: 0;
  padding: 0.18rem;
  padding-left: 1rem;
  width: calc(100% - 1.875rem);
  height: 100%;
  box-sizing: border-box;
  position: unset;
  text-align: left;
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 0;
  padding: 0;
`;

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState({});

  const userRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://goldblv.com/api/hiring/tasks/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirmation: passwordConfirm,
        }),
      });
      const data = await res.json();
      console.log("data", data);
      if (res.status === 201) {
        console.log(data);
        localStorage.setItem("email", data.email);
        navigate("/succeed");
      } else {
        setError(data.errors);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <Card
      image={formPlaceholder}
      Headline="Create Account"
      Subhead="Go ahead and sign up, let everyone know how awesome you are!"
    >
      <SignUpForm onSubmit={handelSubmit}>
        <FormInput img={User}>
          <SignUpInput
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            //   {required}
          />
        </FormInput>
        {error.username &&
          error.username.map((err) => <ErrorMessage>{err}</ErrorMessage>)}
        <FormInput img={EnvelopeSimple}>
          <SignUpInput onChange={(e) => setEmail(e.target.value)} type="text" />
        </FormInput>
        {error.email &&
          error.email.map((err) => <ErrorMessage>{err}</ErrorMessage>)}
        <FormInput img={LockKey}>
          <SignUpInput
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormInput>

        {error.password &&
          error.password.map((err) => <ErrorMessage>{err}</ErrorMessage>)}

        <FormInput img={LockKey}>
          <SignUpInput
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type="password"
          />
        </FormInput>

        <CardButton type="submit"> Sign Up </CardButton>
      </SignUpForm>
    </Card>
  );
};
