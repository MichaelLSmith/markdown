import React, { Component } from 'react';
import marked from 'marked';
import Markdown from './Markdown.js';
import Markup from './Markup.js';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Michael Smith](https://freecodecamp.com/michaellsmith)*' };

  }
  handleChange(val) {
    this.setState({ value: val });
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
              <Markdown
                value={this.state.value} handleChange={this.handleChange.bind(this)}/>
            </div>
              <Markup
                setContent={this.createMarkup(markedText)}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
