export const CHANGE_HINT_DISPLAY = 'CHANGE_HINT_DISPLAY';

export type Actions = {
  CHANGE_HINT_DISPLAY: { type: typeof CHANGE_HINT_DISPLAY, payload: string },
};

// Action Creators
export const actionCreators = {
  changeHintDisplay: (payload: string): Actions[typeof CHANGE_HINT_DISPLAY] => ({
    type: CHANGE_HINT_DISPLAY, payload,
  }),
}