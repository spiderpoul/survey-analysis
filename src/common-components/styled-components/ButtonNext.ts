import styled, { keyframes } from 'styled-components';

export const ButtonNext = styled.button`
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