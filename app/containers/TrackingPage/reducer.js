/*
 *
 * TrackingPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  vehicle_state: [
    { message: 'not yet start engine', color: '#E0E0E0' },
    { message: 'running', color: '#E0E000' },
    { message: 'stop at the checkpoint/gas station', color: '#E000E0' },
    { message: 'stop', color: '#E00000' },
  ],
  vehicles: [
    { id: 'vehicle_1', coordinates: [-0.134958, 51.509654], state: 1, ckName: 'Point 1', ckDescription: 'Description', ckPassTime: '15:10', type: 'Truck' },
    { id: 'vehicle_2', coordinates: [-0.137865, 51.505186], state: 1, ckName: 'Point 2', ckDescription: 'Description', ckPassTime: '15:10', type: 'Truck' },
    { id: 'vehicle_3', coordinates: [-0.136039, 51.506943], state: 3, ckName: 'Point 3', ckDescription: 'Description', ckPassTime: '15:10', type: 'Truck' },
    { id: 'vehicle_4', coordinates: [-0.138314, 51.507893], state: 1, ckName: 'Point 4', ckDescription: 'Description', ckPassTime: '15:10', type: 'Truck' },
    { id: 'vehicle_5', coordinates: [-0.134284, 51.509234], state: 2, ckName: 'Point 5', ckDescription: 'Description', ckPassTime: '15:10', type: 'Truck' },
    { id: 'vehicle_6', coordinates: [-0.133067, 51.511463], state: 0, ckName: 'Point 6', ckDescription: 'Description', ckPassTime: '15:10', type: 'Truck' },
    { id: 'vehicle_7', coordinates: [-0.142451, 51.516436], state: 2, ckName: 'Point 7', ckDescription: 'Description', ckPassTime: '15:10', type: 'Truck' },
    { id: 'vehicle_8', coordinates: [-0.119330, 51.511271], state: 2, ckName: 'Point 8', ckDescription: 'Description', ckPassTime: '15:10', type: 'Truck' },
    { id: 'vehicle_9', coordinates: [-0.130498, 51.513489], state: 2, ckName: 'Point 9', ckDescription: 'Description', ckPassTime: '15:10', type: 'Truck' },
    { id: 'vehicle_10', coordinates: [-0.134700, 51.516045], state: 2, ckName: 'Point 10', ckDescription: 'Description', ckPassTime: '15:10', type: 'Truck' },
  ],
  movingPath: [
    {
      id: 'vehicle_1',
      checkpoint: 'point_5',
      path: [
        [
          [-0.128427, 51.509846],
          [-0.132026, 51.508845],
          [-0.134958, 51.509654],
        ],
        [
          [-0.128427, 51.509846],
          [-0.128522, 51.509549],
          [-0.132026, 51.508845],
          [-0.133316, 51.510114],
          [-0.134958, 51.509654],
        ],
        [
          [-0.128427, 51.509846],
          [-0.128522, 51.509549],
          [-0.130641, 51.509370],
          [-0.132026, 51.508845],
          [-0.133316, 51.510114],
          [-0.134579, 51.510080],
          [-0.134958, 51.509654],
        ],
      ],
    },
  ],
  scheduledPath: [
    {
      id: 'vehicle_1',
      path: [
        [-0.128427, 51.509846],
        [-0.128522, 51.509549],
        [-0.130641, 51.509370],
        [-0.132026, 51.508845],
        [-0.133316, 51.510114],
        [-0.134579, 51.510080],
        [-0.135712, 51.509377],
      ],
      checkpointInfo: [
        { id: 'point_1', name: 'Point 1', description: 'Description', estimationTime: '15:20', actualTime: '15:10' },
        { id: 'point_2', name: 'Point 2', description: 'Description', estimationTime: '15:50', actualTime: '15:35' },
        { id: 'point_3', name: 'Point 3', description: 'Description', estimationTime: '16:20', actualTime: '16:10' },
        { id: 'point_4', name: 'Point 4', description: 'Description', estimationTime: '16:55', actualTime: '16:50' },
        { id: 'point_5', name: 'Point 5', description: 'Description', estimationTime: '17:20', actualTime: '17:30' },
        { id: 'point_6', name: 'Point 6', description: 'Description', estimationTime: '18:20', actualTime: '' },
        { id: 'point_7', name: 'Point 7', description: 'Description', estimationTime: '19:20', actualTime: '' },
      ],
    },
  ],
});

function trackingPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default trackingPageReducer;
