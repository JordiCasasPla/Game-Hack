import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Home from "./components/home";
import Ranking from "./components/ranking";
import MainGame from "./components/mainGame";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={Ranking} />
      </Routes>
    </Router>
  );
};