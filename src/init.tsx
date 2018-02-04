import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled from 'styled-components';
import 'normalize.css';
import './less/globals.less';
import App from './App';

export type Data = TextData | ChoiceData;

export interface TextData {
  type: PollType.text;
  question: string;
}

export interface ChoiceData {
  type: PollType.choice;
  question: string;
  choices: string[];
}

export enum PollType {
  text = 'text',
  choice = 'choice'
}

const data: Data[] = [
  {
    type: PollType.text,
    question: 'what kind of bear the best?'
  },
  {
    type: PollType.choice,
    question: 'what kind of bear the best?',
    choices: [
      'Black bear',
      'White bear',
      'Beets'
    ]
  },
  {
    type: PollType.text,
    question: 'Another question'
  }
];

ReactDom.render(
  (
      <App data={data}/>
  ),
  document.getElementById('root')
);
