export type Data = TextData | ChoiceData | InfoData;

export interface TextData {
  type: QuestionType.text;
  question: string;
}

export interface InfoData {
  type: QuestionType.info;
  header: string;
  info: string;
}

export interface ChoiceData {
  type: QuestionType.choice;
  question: string;
  choices: string[];
}

export enum QuestionType {
  text,
  choice,
  info
}