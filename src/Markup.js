//right
import React from 'react';
import './App.css';

const Markup = (props) =>
  <div
    className="col-xs-6"
    dangerouslySetInnerHTML={props.setContent}
  >
  </div>
export default Markup;
