import { IFilledField } from '@src/models';

export const FILLED_FIELD = 'FILLED_FIELD';

export type Actions = {
  FILLED_FIELD: { type: typeof FILLED_FIELD, payload: IFilledField },
};

// Action Creators
export const actionCreators = {
  filledField: ( payload: IFilledField ): Actions[typeof FILLED_FIELD] => ({
    type: FILLED_FIELD, payload,
  }),
}