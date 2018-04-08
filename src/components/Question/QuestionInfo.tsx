import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { FormText, QuestionText, ButtonNext } from '../../common-components/';
import { History } from '../../App';
import { QuestionType } from '../../data';

export interface QuestionInfoProps {
  step: number;
  header: string;
  info: string;
  buttonText?: string;
  onSubmit: (history: History) => (e: any) => void;
}

export class QuestionInfo extends React.Component<QuestionInfoProps, {}> {
  render() {
    const { header, info, step, buttonText } = this.props;

    return (
      <FormText onSubmit={this.props.onSubmit({ step, type: QuestionType.info })}>
        <QuestionText>{header}</QuestionText>
        <InfoText dangerouslySetInnerHTML={{ __html: info }} />
        <ButtonNext>{buttonText ? buttonText : 'Next'}</ButtonNext>
      </FormText>
    );
  }
}

const InfoText = styled.div`
  font-size: 14px;
`;