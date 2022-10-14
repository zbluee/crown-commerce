import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "hello",
    };
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hats" element={<h1>Hats page</h1>} />
          <Route path="/jackets" element={<h1>JACKETS page</h1>} />
        </Routes>
      </div>
    );
  }
}

export default App;
