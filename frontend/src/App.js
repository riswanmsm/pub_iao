// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // If using React Router
import Navbar from "./components/Navbar";
import "./App.css"; // Import your global CSS file

const Home = () => {
  return <h1>Home Page</h1>; // Your Home component
};

const About = () => {
  return <h1>About Us Page</h1>; // Your About component
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
