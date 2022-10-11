import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test : 'hello'
    }
  }

  render(){
    return (
      <div className='App'>
        <h1>{this.state.test}</h1>
      </div>
    )
  }
}

export default App;
