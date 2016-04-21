// css
import './main.css';
// usual import for react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// main function that attachs to DOM
function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);
  ReactDOM.render(<App />, app);
}

// invoke
main();
