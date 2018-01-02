import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { Form, Question } from '../../common-components/';

interface PollChoiceProps {
  question: string;
  choices: string[];
}

export class PollChoice extends React.Component<PollChoiceProps> {
  render() {
    const { question, choices } = this.props;
    const choicesElements = choices.map(choice => (
      <Button key={choice}>{choice}</Button>
    ));
    return (
      <Form>
        <Question>{question}</Question>
        <ChoicesContainer>
          {choicesElements}
        </ChoicesContainer>
      </Form>
    )
  }
};

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

const ChoicesContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;  
  justify-content: center;
  align-items: center;
`;