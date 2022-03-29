import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import FunctionExample from "./Routes/FunctionExample/FunctionExample";
import ClassExample from "./Routes/ClassExample/ClassExample";
import Home from "./Routes/Home";
import EditBook from "./Routes/ClassExample/EditBook";

const routing = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/functionexample" element={<FunctionExample />} />
      <Route path="/classexample" element={<ClassExample />} />
      <Route exact path="/addbook" element={<EditBook />} />
      <Route exact path="/editbook/:bookId" element={<EditBook />} />

    </Routes>
  </Router>
);

ReactDOM.render(routing, document.getElementById("app"));

