import React from "react";
import "./App.css";
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
        <HomePage />
      </div>
    );
  }
}

export default App;
