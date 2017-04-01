import React, { Component } from 'react';
import './App.css';

const Markdown () => {
  return (
    <textarea
      name="text_input"
      rows="15"
      cols="50"
      value={this.state.value}
      onChange={this.handleChange} 
    />
  )
}
