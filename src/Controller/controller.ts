import { AppState, History } from '../App';

type Reducer<TParam> = (param: TParam) => (state: AppState) => AppState;
type ReducerCurr<CurrParam, TParam> = (currParam: CurrParam) => (param: TParam) => (state: AppState) => AppState;

const handleInputChange: Reducer<any> = e => s => ({
  ...s
});

const startAgain: Reducer<any> = () => s => ({
  ...s,
  questionCounter: 0
});

const onSubmitForm: ReducerCurr<History, any> = historyItem => e => s => {
  e.preventDefault();
  
  return {
  ...s,
  questionCounter: s.questionCounter + 1,
  history: { ...s.history, historyItem }
  };
};


export class Controller {
  constructor(private getState: () => AppState, private onUpdate: (newState: AppState) => void) {
  }

  private dispath = (reduce: (state: AppState) => AppState) => {
    const currentState = this.getState();
    const newState = reduce(currentState);
    console.log(newState);
    this.onUpdate(newState);
  }

  private makeMethod<TParam>(makeReducer: Reducer<TParam>, name: string): ((param?: TParam) => void) {
    return (param: TParam) => {
      const reducer = makeReducer(param);
      console.log(name);
      this.dispath(reducer);
    };
  }

  private makeMethodCurr<CurrParam, TParam>(makeReducer: ReducerCurr<CurrParam, TParam>, name: string): ((currParam: CurrParam) => (param: TParam) => void) {
    return (currParam: CurrParam) => (param: TParam) => {
      const reducer = makeReducer(currParam)(param);
      console.log(name);
      this.dispath(reducer);
    };
  }

  public onSubmitForm = this.makeMethodCurr(onSubmitForm, onSubmitForm.name);
  public startAgain = this.makeMethod(startAgain, startAgain.name);
}
