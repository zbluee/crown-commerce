import React from "react";
import "./App.css";
import Homepage from "./components/homepage/homepage.component";

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
        <Homepage/>
      </div>
    );
  }
}

export default App;
