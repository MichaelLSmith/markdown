import React, { Component } from 'react';
import  marked from 'marked';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Michael Smith](https://freecodecamp.com/michaellsmith)*' };

    this.handleChange = this.handleChange.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  createMarkup(markedText) {
    return {__html: markedText};
  }

  render() {
    const {value} = this.state;
    const markedText = marked(value, {sanitize: true});
    return (
      <div className="App">
        <div className="title">
          <h2>Markdown Converter</h2>
          <p>Enter markdown text in the textbox on the left and see the results on the right.</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <textarea 
                name="text_input" 
                rows="15" 
                cols="50" 
                value={this.state.value} 
                onChange={this.handleChange} 
              />
            </div>
              <div 
                className="col-xs-6 output" 
                dangerouslySetInnerHTML={this.createMarkup(markedText)} 
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
