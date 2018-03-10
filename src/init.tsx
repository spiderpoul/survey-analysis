import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled from 'styled-components';
import 'normalize.css';
import './less/globals.less';
import App from './App';

export type Data = TextData | ChoiceData;

export interface TextData {
  type: QuestionType.text;
  question: string;
}

export interface ChoiceData {
  type: QuestionType.choice;
  question: string;
  choices: string[];  
}

export enum QuestionType {
  text = 'text',
  choice = 'choice'
}

const data: Data[] = [
  {
    type: QuestionType.text,
    question: 'what kind of bear the best?'
  },
  {
    type: QuestionType.choice,
    question: 'what kind of bear the best?',
    choices: [
      'Black bear',
      'White bear',
      'Beets'
    ]
  },
  {
    type: QuestionType.text,
    question: 'Another question'
  }
];

ReactDom.render(
  (
    <App data={data} />
  ),
  document.getElementById('root')
);
