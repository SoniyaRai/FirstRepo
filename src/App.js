import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "./Login.css";
import "./Home.css";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Product from "./Product";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
