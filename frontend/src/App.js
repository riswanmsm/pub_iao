// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // If using React Router
import "./App.css"; // Import your global CSS file
import Wrapper from "./components/Wrapper";
import HomePage from "./components/HomePage";
import AboutusPage from "./components/AboutusPage";
import TimetothinkPage from "./components/TimetothinkPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <HomePage />
            </Wrapper>
          }
        />
        <Route
          path="/about"
          element={
            <Wrapper>
              <AboutusPage />
            </Wrapper>
          }
        />
        <Route
          path="/time-to-think"
          element={
            <Wrapper>
              <TimetothinkPage />
            </Wrapper>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
