import React from "react";
import Links from "./components/Links";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Social from "./components/Social";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Profile />
      <Links />
      <Social />
      <Footer />
    </div>
  );
};

export default App;
