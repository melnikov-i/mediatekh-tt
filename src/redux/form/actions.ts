export const TEST_TYPE1 = 'TEST_TYPE1';
export const TEST_TYPE2 = 'TEST_TYPE2';

export type Actions = {
  TEST_TYPE1: {
    type: typeof TEST_TYPE1,
  },
  TEST_TYPE2: {
    type: typeof TEST_TYPE2,
  },
};

// Action Creators
export const actionCreators = {
  firstTestSfc: (): Actions[typeof TEST_TYPE1] => ({
    type: TEST_TYPE1,
  }),
  secondTestSfc: (): Actions[typeof TEST_TYPE2] => ({
    type: TEST_TYPE2,
  }),
}