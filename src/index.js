import React from "react";
import ReactDOM from "react-dom";

import Root from './Root';
import HomePage from './components/home';

import './App.scss';

ReactDOM.render(
  <Root>
    <HomePage />
  </Root>,
  document.getElementById("root")
);
