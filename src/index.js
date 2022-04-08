import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

/*  
    "start": "webpack-dev-server --mode development --hot --open",
    "build": "webpack --mode production"

    "start": "react-scripts start",
    "build": "react-scripts build"
*/

ReactDOM.render(
    <App />, document.getElementById('root')
);
