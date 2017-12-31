import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled from 'styled-components';
import 'normalize.css';
import App from './App';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

ReactDom.render(
  (
      <App />
  ),
  document.getElementById('root')
);
