import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { Form, QuestionText, ButtonNext } from '../../common-components/';
import { History } from '../../App';
import { QuestionType } from '../../data';

export interface QuestionInfoProps {
  step: number;
  header: string;
  info: string;
  onSubmit: (history: History) => (e: any) => void;
}

export class QuestionInfo extends React.Component<QuestionInfoProps, {}> {
  render() {
    const { header, info, step } = this.props;

    return (
      <FormText onSubmit={this.props.onSubmit({ step, type: QuestionType.info })}>
        <QuestionText>{header}</QuestionText>
        <InfoText dangerouslySetInnerHTML={{ __html: info }} />
        <ButtonNext>Next</ButtonNext>
      </FormText>
    );
  }
}

const FormText = Form.extend`
  width: 50vw;
`;

const InfoText = styled.div`
  font-size: 14px;
`;