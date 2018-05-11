import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Menu from './components/Menu';
import './styles/main.css'

const title = 'My Minimal React Webpack Babel Setup';

let app = document.createElement('div');
app.id = "app"
document.querySelector('body').appendChild(app);

ReactDOM.render(
  <div>
    <Menu />
    <App />
    
  </div>,
  document.getElementById('app')
);