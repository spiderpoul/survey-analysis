import styled, { keyframes } from 'styled-components';
import { sizes } from '../../utils';

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const FormText = Form.extend`
  width: 50vw;

  @media (max-width: ${sizes.phone}px) {
    width: 80vw;
  }
`;
