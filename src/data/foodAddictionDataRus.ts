import { Data, QuestionType } from './';


export const getFoodAddictionData: () => Data[] = () => [
  {
    type: QuestionType.info,
    header: 'Приветствуем вас!',
    info: `
      <p>Порадуйтесь, ведь у вас появился отличный шанс исследовать свою зависимость, раз и навсегда избавиться от неё и наконец-то стать свободным! Испытайте чувство благодарности!</p>
      <p>Будьте уверены, что информация ведённая вами на данном сайте и результаты проработки полностью конфиденциальны и доступны только вам! После прохождения проработки результаты пропадают, нигде не хранятся и не обрабатываются.</p>
    `
  },
  {
    type: QuestionType.text,
    question: 'Чего я хочу в данный момент?'
  },
  {
    type: QuestionType.text,
    question: 'Как можно описать эти ощущения?'
  },
  {
    type: QuestionType.text,
    question: 'Чего я ожидаю от этого?'
  },
  {
    type: QuestionType.text,
    question: 'Чтобы я делал, если бы отсутствовала эта тяга?'
  },
  {
    type: QuestionType.text,
    question: 'Что я ощущаю во время еды?'
  },
  {
    type: QuestionType.choice,
    question: 'Действительно ли я хочу ЭТО есть?',
    choices: [
      'Да',
      'Нет'
    ]
  },
  {
    type: QuestionType.text,
    question: 'Что должно измениться, чтобы я не делал и не желал этого?'
  },
  {
    type: QuestionType.text,
    question: 'Почему я выбрал именно эту еду, а не какую либо другую(а не какой-нибудь сочный фрукт)?'
  },
  {
    type: QuestionType.choice,
    question: 'Действительно ли в ЭТОМ нуждается мой организм?',
    choices: [
      'Да',
      'Нет'
    ]
  },
  {
    type: QuestionType.text,
    question: 'Какие ощущения были в итоге?'
  }
];