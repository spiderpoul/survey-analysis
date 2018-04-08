import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled from 'styled-components';
import 'normalize.css';
import './less/globals.less';
import { getFoodAddictionData, titleRus } from './data';
import App from './App';

const data = getFoodAddictionData();

ReactDom.render(
  (
    <App data={data} title={titleRus}/>
  ),
  document.getElementById('root')
);
