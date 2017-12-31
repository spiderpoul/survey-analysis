import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled, { keyframes } from 'styled-components';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <Form>
          <Button>Get rid of food addiction</Button>
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

const Form = styled.form`
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

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;  
`;
