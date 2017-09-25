/**
 * Reducer таблицы, отрисовывающей данные
 */

interface TableInitialState {
  form: string
}

const initialState: TableInitialState = {
  form: 'Form'
};

export default function form(state: TableInitialState = initialState) {
  return state;
}