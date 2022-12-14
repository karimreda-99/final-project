import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WelcomeScreen } from "./Sign Up/WelcomeScreen";
import { Succeed } from "./Sign Up/Succeed";
import { SignUp } from "./Sign Up/SignUp";

const App = () => {
  return (
   
    <Routes>
    

      <Route exact path="/" element={<WelcomeScreen />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/Succeed" element={<Succeed />} />


    </Routes>
  
  );
};

export default App;
