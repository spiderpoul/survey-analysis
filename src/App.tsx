import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { PollChoice, PollInput } from './components/';
import { Controller } from './Controller';
import { Data, PollType } from './init';

export interface History {
  stepId: number;
  question: number;
  answer: string;
}

export interface AppProps {
  data: Data[];
}

export interface AppState {
  history: History[];
  currentQuestion: number;
}

export default class App extends React.Component<AppProps, AppState> {
  private controller: Controller;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      currentQuestion: 0,
      history: []
    };

    this.controller = new Controller(
      () => this.state,
      newState => this.setState(prevState => ({
        ...prevState,
        ...newState
      }))
    );

  }

  render() {

    const pollChoice = (question: string, choices: string[]) => (
      <FormContainer>
        <PollChoice
          question={question}
          choices={choices}
          onSubmit={this.controller.onSubmitForm}
        />
      </FormContainer>
    );

    const pollText = (question: string) => (
      <FormContainer>
        <PollInput
          question={question}
          onSubmit={this.controller.onSubmitForm}
        />
      </FormContainer>
    );

    const chainQuetions = this.props.data.map(item => {
      switch (item.type) {
        case PollType.choice:
          return pollChoice(item.question, item.choices);
        case PollType.text:
          return pollText(item.question);
        default:
          return pollText('');
      }
    });

    return (
      <Container>
        {chainQuetions[this.state.currentQuestion]}
        <ChatBotContainer>
          Chat bot coming soon
        </ChatBotContainer>
      </Container>
    );
  }
}

const backgroundChange = keyframes`
      0%{background - position: 13% 0%}
      50%{background - position: 88% 100%}
      100%{background - position: 13% 0%}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  background: linear-gradient(337deg, #92d4c3, #01799d, #00b4ad, #f2cc00);
  background-size: 800% 800%;

  animation: ${backgroundChange} 60s ease infinite;
`;

const appearFromTop = keyframes`
  0%{top: -50%; opacity: 0}
  100%{top: 10%; opacity: 1}
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  animation: ${appearFromTop} 1s ease-in;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 12px 0px rgba(0,0,0,0.5);
  transition: 0.5s all ease-in-out;
`;

const ChatBotContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  color: pink;
`;
