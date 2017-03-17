import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    console.log(this.state);
    const {value} = this.state;
    return (
      <div className="App">
        <textarea name="text_input" rows="15" cols="50" value={this.state.value} onChange={this.handleChange} />
        <div>{value}</div>
      </div>
    );
  }
}

export default App;
