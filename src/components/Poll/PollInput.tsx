import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { Form, Question } from '../../common-components/';

interface PollInputProps {
  question: string;
}

interface PollInputState {
  answer: string;
}

export class PollInput extends React.Component<PollInputProps, PollInputState> {  
  constructor(props: PollInputProps) {
    super(props);
    this.state = {
      answer: ''
    };
  }

  private onSubmit = (e: any) => {
    e.preventDefault();
  }

  private onInputChange = (e: any) => {
    this.setState({ answer: e.currentTarget.value });
  }

  render() {
    const { question } = this.props;
    return (
      <Form onSubmit={this.onSubmit}>
        <Question>{question}</Question>
        <TextArea
          value={this.state.answer}
          onChange={this.onInputChange}
        />
        <Button>Next</Button>
      </Form>
    );
  }
}

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
    transform: scale(1.2) skew(5deg,-5deg);
    box-shadow: 0 0 5px 0 palevioletred;
  }  
`;


