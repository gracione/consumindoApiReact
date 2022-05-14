import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import api from "./services/api";
import Login from './pages/login/Login';

function App() {

  return (
    <div className="App">
      <Login></Login>
      <p></p>
    </div>
  );
}

export default App;
