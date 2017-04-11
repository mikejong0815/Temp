
import { fromJS } from 'immutable';
import trackingPageReducer from '../reducer';

describe('trackingPageReducer', () => {
  it('returns the initial state', () => {
    expect(trackingPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
