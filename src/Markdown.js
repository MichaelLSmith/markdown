import React from 'react';
import './App.css';

const Markdown = (props) => {
  console.log(props);
  return (
    <div>
      <textarea
        name="text_input"
        rows="15"
        cols="50"
        value={props.value}
        onChange={(e) => {props.handleChange(e.target.value)}}
      />
    </div>
  )
}

export default Markdown;
