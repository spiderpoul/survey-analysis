import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { PollChoice, PollInput } from './components/';

interface AppProps {

}

interface AppState {

}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <Container>
        <Form>
          {/* <PollChoice question={'What kind of bear the best?'} choices={['Black bear', 'White bear']}  /> */}
          <PollInput question={'What kind of bear the best?'}/>
        </Form>
      </Container>
    )
  }
};

const backgroundChange = keyframes`
      0%{background-position: 13% 0%}
      50%{background-position: 88% 100%}
      100%{background-position: 13% 0%}
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

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 70%;
  background-color: white;
  animation: ${appearFromTop} 1s ease-in;
  border-radius: 15px;
`;
