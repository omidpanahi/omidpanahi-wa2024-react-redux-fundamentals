import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App from './App';


// Hello world of react
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello, world!"),
  );
};



// lets render list of users


// convert this to jsx


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
