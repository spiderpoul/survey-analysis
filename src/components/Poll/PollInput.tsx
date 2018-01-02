import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled from 'styled-components';
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
  private onInputChange = (e: any) => {
    this.setState({ answer: e.currentTarget.value })
  }
  render() {
    const { question } = this.props;
    return (
      <Form>
        <Question>{question}</Question>
        <TextArea value={this.state.answer} onChange={this.onInputChange} />
      </Form>
    )
  }
};

const TextArea = styled.textarea`
  width: 100%;
  height: 50%;
`;

