import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

it('renders without crashing', () => {
  let h1 = document.createElement('h1');
  ReactDOM.render(<App />, h1);
  ReactDOM.unmountComponentAtNode(h1);
});