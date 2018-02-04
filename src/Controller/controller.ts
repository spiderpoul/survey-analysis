import { AppState } from '../App';

type Reducer<TParam> = (param: TParam) => (state: AppState) => AppState;
type ReducerCurr<CurrParam, TParam> = (currParam: CurrParam) => (param: TParam) => (state: AppState) => AppState;

const handleInputChange: Reducer<any> = e => s => ({
  ...s
});

const onSubmitForm: Reducer<any> = e => s => ({
  ...s,
  currentQuestion: s.currentQuestion + 1
});


export class Controller {
  constructor(private getState: () => AppState, private onUpdate: (newState: AppState) => void) {
  }

  private dispath = (reduce: (state: AppState) => AppState) => {
    const currentState = this.getState();
    const newState = reduce(currentState);
    console.log(newState);
    this.onUpdate(newState);
  }

  private makeMethod<TParam>(makeReducer: Reducer<TParam>): ((param: TParam) => void) {
    return (param: TParam) => {
      const reducer = makeReducer(param);
      this.dispath(reducer);
    };
  }

  private makeMethodCurr<CurrParam, TParam>(makeReducer: ReducerCurr<CurrParam, TParam>): ((currParam: CurrParam) => (param: TParam) => void) {
    return (currParam: CurrParam) => (param: TParam) => {
      const reducer = makeReducer(currParam)(param);
      this.dispath(reducer);
    };
  }

  public onSubmitForm = this.makeMethod(onSubmitForm);
}
