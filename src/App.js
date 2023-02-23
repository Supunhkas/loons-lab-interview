import React from "react";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
// const api = {
//   key: "75feeac4f8af1b14320f00172f27e5ac",
//   base: "https://api.openweathermap.org/data/3.0/",
// };

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
