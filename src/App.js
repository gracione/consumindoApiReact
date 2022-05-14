import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/1")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      {console.log(user)}
      <p></p>
    </div>
  );
}

export default App;
