import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { Form, QuestionText } from '../../common-components/';
import { History } from '../../App';
import { QuestionType } from '../../data';

export interface QuestionChoiceProps {
  step: number;
  question: string;
  choices: string[];
  onSubmit: (history: History) => (e: any) => void;
}

export class QuestionChoice extends React.Component<QuestionChoiceProps> {
  render() {
    const { question, choices, step } = this.props;
    const choicesElements = choices.map(choice => (
      <Button
        key={choice}
        onClick={this.props.onSubmit({ step, answer: choice, type: QuestionType.choice })}
      >{choice}
      </Button>
    ));
    return (
      <Form onSubmit={e => e.preventDefault()}>
        <QuestionText>{question}</QuestionText>
        <ChoicesContainer>
          {choicesElements}
        </ChoicesContainer>
      </Form>
    );
  }
}

const Button = styled.button`
  width: 80%;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin-bottom: 20px;  
  transition: 0.5s all ease-in-out;
  outline: none;
  cursor: pointer;

  &:hover {
    border-radius: 12px;      
  }
`;

const ChoicesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;  
  justify-content: center;
  align-items: center;
`;
