import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { Form, QuestionText } from '../../common-components/';
import { History } from '../../App';
import { QuestionType } from '../../init';

export interface QuestionInputProps {
  step: number;
  question: string;
  onSubmit: (history: History) => (e: any) => void;
}

export interface QuestionInputState {
  answer: string;
}

export class QuestionInput extends React.Component<QuestionInputProps, QuestionInputState> {
  constructor(props: QuestionInputProps) {
    super(props);
    this.state = {
      answer: ''
    };
  }

  private onInputChange = (e: any) => {
    this.setState({ answer: e.currentTarget.value });
  }

  render() {
    const { question, step } = this.props;
    const { answer } = this.state;
    return (
      <FormText onSubmit={this.props.onSubmit({ answer, step, type: QuestionType.text })}>
        <QuestionText>{question}</QuestionText>
        <TextArea
          value={answer}
          onChange={this.onInputChange}
        />
        <Button>Next</Button>
      </FormText>
    );
  }
}

const FormText = Form.extend`
  width: 50vw;
`;

const TextArea = styled.textarea`
  width: 95%;
  max-width: 95%;
  min-width: 95%;
  margin-bottom: 15px;
  height: 250px;
  border: 1px solid gray;
  transition: 0.3s all ease-in-out;
  font-style: italic;
  border-radius: 5px;
  outline: none;

  &:focus {
    box-shadow: 0 0 10px 0 #097881;
    border: 1px solid rgba(255,255,255,0);  
  }
`;

// const flipAnimation = keyframes`      
//       100%{transform: rotateX(360deg);}
// `;

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: rgba(255,255,255,0);
  color: palevioletred;
  border: 2px solid palevioletred;  
  cursor: pointer;
  transition: 0.5s all ease-in-out;
  outline: none;

  &:hover {
    border-radius: 12px;      
  }  
`;


