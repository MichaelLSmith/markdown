import React from 'react';
import './App.css';

const Markdown = (props) => {
  return (
    <div>
      <textarea
        name="text_input"
        rows="15"
        cols="50"
        onChange={(e) => {props.handleChange(e.target.value)}}
      />
    </div>
  )
}

export default Markdown;
