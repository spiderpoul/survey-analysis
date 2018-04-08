import { Data, QuestionType } from './';

export enum ButtonText {
  start = 'Начать проработку',
  next = 'Далее',
  again = 'Начать проработку заново'
}

export const titleRus = 'Свобода в питании'

export const getFoodAddictionData: () => Data[] = () => [
  {
    type: QuestionType.info,
    header: 'Приветствуем вас!',
    info: `
      <p>Порадуйтесь, ведь у вас появился отличный шанс исследовать свою зависимость, раз и навсегда избавиться от неё и наконец-то стать свободным! Испытайте чувство благодарности!</p>
      <p>Будьте уверены, что информация ведённая вами на данном сайте полностью конфиденциальна и доступна только вам! После прохождения проработки результаты пропадают, нигде не хранятся и не обрабатываются.</p>
    `,
    buttonText: ButtonText.start
  },
  {
    type: QuestionType.text,
    question: 'Чего я хочу в данный момент?',
    buttonText: ButtonText.next
  },
  {
    type: QuestionType.text,
    question: 'Как можно описать эти ощущения?',
    buttonText: ButtonText.next
  },
  {
    type: QuestionType.text,
    question: 'Чего я ожидаю от этого?',
    buttonText: ButtonText.next
  },
  {
    type: QuestionType.text,
    question: 'Чтобы я делал, если бы отсутствовала эта тяга?',
    buttonText: ButtonText.next
  },
  {
    type: QuestionType.text,
    question: 'Что я ощущаю во время еды?',
    buttonText: ButtonText.next
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
    question: 'Что должно измениться, чтобы я не делал и не желал этого?',
    buttonText: ButtonText.next
  },
  {
    type: QuestionType.text,
    question: 'Почему я выбрал именно эту еду, а не какую либо другую (а не какой-нибудь сочный фрукт)?',
    buttonText: ButtonText.next
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
    question: 'Какие ощущения были в итоге?',
    buttonText: ButtonText.next
  },
  {
    type: QuestionType.info,
    header: 'Проработка закончена!',
    info: `
      <p>Вы большой молодец, что прорабатываете срывы, у вас обязательно всё получится!</p>
      <p>Советую посмотреть <a target="_blank" href="https://www.youtube.com/playlist?list=PLrixUHzZSXMeO-2mK_WKlP6AzY-D7NnbH">курс по эффективному избавлению от пищевой зависимости</a>.</p>
      <p>А также посетите мой блог <a target="_blank" href="http://pravda-eda.ru">pravda-eda.ru</a></p>
    `,
    buttonText: ButtonText.again
  },
];