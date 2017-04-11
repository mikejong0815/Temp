
import { fromJS } from 'immutable';
import passwordRestorePageReducer from '../reducer';

describe('passwordRestorePageReducer', () => {
  it('returns the initial state', () => {
    expect(passwordRestorePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
