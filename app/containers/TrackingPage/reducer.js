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
    {
      id: 'vehicle_2',
      checkpoint: 'point_2',
      path: [
        [
          [-0.138755, 51.505974],
          [-0.137865, 51.505186],
        ],
        [
          [-0.138755, 51.505974],
          [-0.138608, 51.505868],
          [-0.138432, 51.505680],
          [-0.138264, 51.505519],
          [-0.137865, 51.505186],
        ],
        [
          [-0.138755, 51.505974],
          [-0.138680, 51.505921],
          [-0.138608, 51.505868],
          [-0.138532, 51.505780],
          [-0.138432, 51.505680],
          [-0.138334, 51.505612],
          [-0.138264, 51.505519],
          [-0.138064, 51.505319],
          [-0.137865, 51.505186],
        ],
      ],
    },
    {
      id: 'vehicle_3',
      checkpoint: 'point_3',
      path: [
        [
          [-0.137659, 51.507203],
          [-0.137058, 51.506592],
          [-0.136039, 51.506943],
        ],
        [
          [-0.137659, 51.507203],
          [-0.137414, 51.506959],
          [-0.137058, 51.506592],
          [-0.136537, 51.506775],
          [-0.136222, 51.506885],
          [-0.136039, 51.506943],
        ],
        [
          [-0.137659, 51.507203],
          [-0.137547, 51.507097],
          [-0.137414, 51.506959],
          [-0.137219, 51.506766],
          [-0.137058, 51.506592],
          [-0.136892, 51.506650],
          [-0.136723, 51.506710],
          [-0.136537, 51.506775],
          [-0.136389, 51.506828],
          [-0.136222, 51.506885],
          [-0.136039, 51.506943],
        ],
      ],
    },
    {
      id: 'vehicle_4',
      checkpoint: 'point_6',
      path: [
        [
          [-0.141459, 51.509546],
          [-0.140845, 51.508912],
          [-0.140015, 51.508080],
          [-0.139377, 51.508300],
          [-0.138758, 51.508384],
          [-0.138314, 51.507893],
        ],
        [
          [-0.141459, 51.509546],
          [-0.141155, 51.509213],
          [-0.140845, 51.508912],
          [-0.140704, 51.508778],
          [-0.140359, 51.508438],
          [-0.140015, 51.508080],
          [-0.139454, 51.508261],
          [-0.138835, 51.508463],
          [-0.139377, 51.508300],
          [-0.138416, 51.508018],
          [-0.138758, 51.508384],
          [-0.138039, 51.507985],
          [-0.137413, 51.508199],
          [-0.136757, 51.508402],
          [-0.138314, 51.507893],
        ],
        [
          [-0.141459, 51.509546],
          [-0.141349, 51.509423],
          [-0.141155, 51.509213],
          [-0.140980, 51.509053],
          [-0.140845, 51.508912],
          [-0.140704, 51.508778],
          [-0.140561, 51.508640],
          [-0.140359, 51.508438],
          [-0.140202, 51.508273],
          [-0.140015, 51.508080],
          [-0.139788, 51.508142],
          [-0.139454, 51.508261],
          [-0.139180, 51.508357],
          [-0.138835, 51.508463],
          [-0.139377, 51.508300],
          [-0.138620, 51.508233],
          [-0.138416, 51.508018],
          [-0.138758, 51.508384],
          [-0.138039, 51.507985],
          [-0.137718, 51.508104],
          [-0.137413, 51.508199],
          [-0.137030, 51.508317],
          [-0.136757, 51.508402],
          [-0.138314, 51.507893],
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
    {
      id: 'vehicle_2',
      path: [
        [-0.138755, 51.505974],
        [-0.137865, 51.505186],
        [-0.132672, 51.507203],
        [-0.129797, 51.508198],
        [-0.130644, 51.509380],
        [-0.129936, 51.509480],
        [-0.128509, 51.509560],
      ],
      checkpointInfo: [
        { id: 'point_1', name: 'Point 1', description: 'Description', estimationTime: '15:20', actualTime: '15:10' },
        { id: 'point_2', name: 'Point 2', description: 'Description', estimationTime: '15:50', actualTime: '15:35' },
        { id: 'point_3', name: 'Point 3', description: 'Description', estimationTime: '16:20', actualTime: '' },
        { id: 'point_4', name: 'Point 4', description: 'Description', estimationTime: '16:55', actualTime: '' },
        { id: 'point_5', name: 'Point 5', description: 'Description', estimationTime: '17:20', actualTime: '' },
        { id: 'point_6', name: 'Point 6', description: 'Description', estimationTime: '18:20', actualTime: '' },
        { id: 'point_7', name: 'Point 7', description: 'Description', estimationTime: '19:20', actualTime: '' },
      ],
    },
    {
      id: 'vehicle_3',
      path: [
        [-0.137659, 51.507203],
        [-0.137058, 51.506592],
        [-0.136039, 51.506943],
      ],
      checkpointInfo: [
        { id: 'point_1', name: 'Point 1', description: 'Description', estimationTime: '15:20', actualTime: '15:10' },
        { id: 'point_2', name: 'Point 2', description: 'Description', estimationTime: '15:50', actualTime: '15:35' },
        { id: 'point_3', name: 'Point 3', description: 'Description', estimationTime: '16:20', actualTime: '16:05' },
      ],
    },
    {
      id: 'vehicle_4',
      path: [
        [-0.141459, 51.509546],
        [-0.140845, 51.508912],
        [-0.140015, 51.508080],
        [-0.139377, 51.508300],
        [-0.138758, 51.508384],
        [-0.138314, 51.507893],
        [-0.136183, 51.508435],
      ],
      checkpointInfo: [
        { id: 'point_1', name: 'Point 1', description: 'Description', estimationTime: '15:20', actualTime: '15:10' },
        { id: 'point_2', name: 'Point 2', description: 'Description', estimationTime: '15:50', actualTime: '15:35' },
        { id: 'point_3', name: 'Point 3', description: 'Description', estimationTime: '16:20', actualTime: '16:05' },
        { id: 'point_4', name: 'Point 3', description: 'Description', estimationTime: '16:20', actualTime: '16:05' },
        { id: 'point_5', name: 'Point 3', description: 'Description', estimationTime: '16:20', actualTime: '16:05' },
        { id: 'point_6', name: 'Point 3', description: 'Description', estimationTime: '16:20', actualTime: '16:05' },
        { id: 'point_7', name: 'Point 3', description: 'Description', estimationTime: '16:20', actualTime: '' },
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
