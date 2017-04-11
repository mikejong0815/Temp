import { createSelector } from 'reselect';

/**
 * Direct selector to the passwordRestorePage state domain
 */
const selectPasswordRestorePageDomain = () => (state) => state.get('passwordRestorePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PasswordRestorePage
 */

const makeSelectPasswordRestorePage = () => createSelector(
  selectPasswordRestorePageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPasswordRestorePage;
export {
  selectPasswordRestorePageDomain,
};
