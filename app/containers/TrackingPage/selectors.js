import { createSelector } from 'reselect';

/**
 * Direct selector to the trackingPage state domain
 */
const selectTrackingPageDomain = () => (state) => state.get('trackingPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TrackingPage
 */

const makeSelectTrackingPage = () => createSelector(
  selectTrackingPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTrackingPage;
export {
  selectTrackingPageDomain,
};
