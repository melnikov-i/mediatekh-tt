/**
 * Reducer формы ввода данных
 */

interface FormInitialState {
  form: string
}

const initialState: FormInitialState = {
  form: 'Form'
};

export default function form(state: FormInitialState = initialState) {
  return state;
}