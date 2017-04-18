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
    { id: 'vehicle_1', coordinates: [-0.134958, 51.509654], state: 1, ckName: 'Point 1', ckDescription: 'Description', ckPassTime: '14:00', type: 'Truck' },
    { id: 'vehicle_2', coordinates: [-0.137865, 51.505186], state: 1, ckName: 'Point 2', ckDescription: 'Description', ckPassTime: '14:00', type: 'Truck' },
    { id: 'vehicle_3', coordinates: [-0.136039, 51.506943], state: 3, ckName: 'Point 3', ckDescription: 'Description', ckPassTime: '14:00', type: 'Truck' },
    { id: 'vehicle_4', coordinates: [-0.138314, 51.507893], state: 1, ckName: 'Point 4', ckDescription: 'Description', ckPassTime: '14:00', type: 'Truck' },
  ],
  movingPath: [
    {
      id: 'vehicle_1',
      checkpoint: 'point_5',
      path: [
        [
          { id: 'point_1', coords: [-0.128427, 51.509846], description: 'Descripiton', estimationTime: '12:00', pathTime: '12:00', name: 'Point 1' },
          { id: 'point_2', coords: [-0.132026, 51.508845], description: 'Descripiton', estimationTime: '13:00', pathTime: '13:00', name: 'Point 2' },
          { id: 'point_3', coords: [-0.134958, 51.509654], description: 'Descripiton', estimationTime: '14:00', pathTime: '14:00', name: 'Point 3' },
        ],
        [
          { id: 'point_1', coords: [-0.128427, 51.509846], description: 'Descripiton', estimationTime: '12:00', pathTime: '12:00', name: 'Point 1' },
          { id: '', coords: [-0.128522, 51.509549], description: 'Descripiton', estimationTime: '', pathTime: '12:30', name: 'Point 1-1' },
          { id: 'point_2', coords: [-0.132026, 51.508845], description: 'Descripiton', estimationTime: '13:00', pathTime: '13:00', name: 'Point 2' },
          { id: '', coords: [-0.133316, 51.510114], description: 'Descripiton', estimationTime: '', pathTime: '13:30', name: 'Point 2-1' },
          { id: 'point_3', coords: [-0.134958, 51.509654], description: 'Descripiton', estimationTime: '14:00', pathTime: '14:00', name: 'Point 3' },
        ],
        [
          { id: 'point_1', coords: [-0.128427, 51.509846], description: 'Descripiton', estimationTime: '12:00', pathTime: '12:00', name: 'Point 1' },
          { id: 'point_1_1', coords: [-0.128522, 51.509549], description: 'Descripiton', estimationTime: '', pathTime: '12:30', name: 'Point 1-1' },
          { id: 'point_1_2', coords: [-0.130641, 51.509370], description: 'Descripiton', estimationTime: '', pathTime: '12:45', name: 'Point 1-2' },
          { id: 'point_2', coords: [-0.132026, 51.508845], description: 'Descripiton', estimationTime: '13:00', pathTime: '13:00', name: 'Point 2' },
          { id: 'point_2_1', coords: [-0.133316, 51.510114], description: 'Descripiton', estimationTime: '', pathTime: '13:30', name: 'Point 2-1' },
          { id: 'point_2_2', coords: [-0.134579, 51.510080], description: 'Descripiton', estimationTime: '', pathTime: '13:40', name: 'Point 2-2' },
          { id: 'point_3', coords: [-0.134958, 51.509654], description: 'Descripiton', estimationTime: '14:00', pathTime: '14:00', name: 'Point 3' },
        ],
      ],
    },
    {
      id: 'vehicle_2',
      checkpoint: 'point_2',
      path: [
        [
          { id: 'point_1', coords: [-0.138755, 51.505974], description: 'Descripiton', estimationTime: '12:00', pathTime: '12:00', name: 'Point 1' },
          { id: 'point_2', coords: [-0.137865, 51.505186], description: 'Descripiton', estimationTime: '13:00', pathTime: '13:00', name: 'Point 2' },
        ],
        [
          { id: 'point_1', coords: [-0.138755, 51.505974], description: 'Descripiton', estimationTime: '12:00', pathTime: '12:00', name: 'Point 1' },
          { id: 'point_1_1', coords: [-0.138608, 51.505868], description: 'Descripiton', estimationTime: '', pathTime: '12:10', name: 'Point 1-1' },
          { id: 'point_1_2', coords: [-0.138432, 51.505680], description: 'Descripiton', estimationTime: '', pathTime: '12:20', name: 'Point 1-2' },
          { id: 'point_1_3', coords: [-0.138264, 51.505519], description: 'Descripiton', estimationTime: '', pathTime: '12:30', name: 'Point 1-3' },
          { id: 'point_2', coords: [-0.137865, 51.505186], description: 'Descripiton', estimationTime: '13:00', pathTime: '13:00', name: 'Point 2' },
        ],
        [
          { id: 'point_1', coords: [-0.138755, 51.505974], description: 'Descripiton', estimationTime: '12:00', pathTime: '12:00', name: 'Point 1' },
          { id: 'point_1_1', coords: [-0.138680, 51.505921], description: 'Descripiton', estimationTime: '', pathTime: '12:5', name: 'Point 1-1' },
          { id: 'point_1_2', coords: [-0.138608, 51.505868], description: 'Descripiton', estimationTime: '', pathTime: '12:10', name: 'Point 1-2' },
          { id: 'point_1_3', coords: [-0.138532, 51.505780], description: 'Descripiton', estimationTime: '', pathTime: '12:15', name: 'Point 1-3' },
          { id: 'point_1_4', coords: [-0.138432, 51.505680], description: 'Descripiton', estimationTime: '', pathTime: '12:20', name: 'Point 1-4' },
          { id: 'point_1_5', coords: [-0.138334, 51.505612], description: 'Descripiton', estimationTime: '', pathTime: '12:25', name: 'Point 1-5' },
          { id: 'point_1_6', coords: [-0.138264, 51.505519], description: 'Descripiton', estimationTime: '', pathTime: '12:30', name: 'Point 1-6' },
          { id: 'point_1_7', coords: [-0.138064, 51.505319], description: 'Descripiton', estimationTime: '', pathTime: '12:35', name: 'Point 1-7' },
          { id: 'point_2', coords: [-0.137865, 51.505186], description: 'Descripiton', estimationTime: '13:00', pathTime: '13:00', name: 'Point 2' },
        ],
      ],
    },
    {
      id: 'vehicle_3',
      checkpoint: 'point_3',
      path: [
        [
          { id: 'point_1', coords: [-0.137659, 51.507203], description: 'Descripiton', estimationTime: '12:00', pathTime: '12:00', name: 'Point 1' },
          { id: 'point_2', coords: [-0.137058, 51.506592], description: 'Descripiton', estimationTime: '13:00', pathTime: '13:00', name: 'Point 2' },
          { id: 'point_3', coords: [-0.136039, 51.506943], description: 'Descripiton', estimationTime: '14:00', pathTime: '14:00', name: 'Point 3' },
        ],
        [
          { id: 'point_1', coords: [-0.137659, 51.507203], description: 'Descripiton', estimationTime: '12:00', pathTime: '12:00', name: 'Point 1' },
          { id: 'point_1_1', coords: [-0.137414, 51.506959], description: 'Descripiton', estimationTime: '', pathTime: '12:30', name: 'Point 1-1' },
          { id: 'point_2', coords: [-0.137058, 51.506592], description: 'Descripiton', estimationTime: '13:00', pathTime: '13:00', name: 'Point 2' },
          { id: 'point_2_1', coords: [-0.136537, 51.506775], description: 'Descripiton', estimationTime: '', pathTime: '13:30', name: 'Point 2-1' },
          { id: 'point_2_2', coords: [-0.136222, 51.506885], description: 'Descripiton', estimationTime: '', pathTime: '13:40', name: 'Point 2-2' },
          { id: 'point_3', coords: [-0.136039, 51.506943], description: 'Descripiton', estimationTime: '14:00', pathTime: '14:00', name: 'Point 3' },
        ],
        [
          { id: 'point_1', coords: [-0.137659, 51.507203], description: 'Descripiton', estimationTime: '12:00', pathTime: '12:00', name: 'Point 1' },
          { id: 'point_1_1', coords: [-0.137547, 51.507097], description: 'Descripiton', estimationTime: '', pathTime: '12:10', name: 'Point 1-1' },
          { id: 'point_1_2', coords: [-0.137414, 51.506959], description: 'Descripiton', estimationTime: '', pathTime: '12:30', name: 'Point 1-2' },
          { id: 'point_1_3', coords: [-0.137219, 51.506766], description: 'Descripiton', estimationTime: '', pathTime: '12:40', name: 'Point 1-3' },
          { id: 'point_2', coords: [-0.137058, 51.506592], description: 'Descripiton', estimationTime: '13:00', pathTime: '13:00', name: 'Point 2' },
          { id: 'point_2_1', coords: [-0.136892, 51.506650], description: 'Descripiton', estimationTime: '', pathTime: '13:10', name: 'Point 2-1' },
          { id: 'point_2_2', coords: [-0.136723, 51.506710], description: 'Descripiton', estimationTime: '', pathTime: '13:20', name: 'Point 2-2' },
          { id: 'point_2_3', coords: [-0.136537, 51.506775], description: 'Descripiton', estimationTime: '', pathTime: '13:30', name: 'Point 2-3' },
          { id: 'point_2_4', coords: [-0.136222, 51.506885], description: 'Descripiton', estimationTime: '', pathTime: '13:40', name: 'Point 2-4' },
          { id: 'point_2_5', coords: [-0.136389, 51.506828], description: 'Descripiton', estimationTime: '', pathTime: '13:50', name: 'Point 2-5' },
          { id: 'point_3', coords: [-0.136039, 51.506943], description: 'Descripiton', estimationTime: '14:00', pathTime: '14:00', name: 'Point 3' },
        ],
      ],
    },
    {
      id: 'vehicle_4',
      checkpoint: 'point_6',
      path: [
        [
          { id: 'point_1', coords: [-0.141459, 51.509546], description: 'Descripiton', estimationTime: '12:00', pathTime: '12:00', name: 'Point 1' },
          { id: 'point_2', coords: [-0.140845, 51.508912], description: 'Descripiton', estimationTime: '13:00', pathTime: '12:30', name: 'Point 2' },
          { id: 'point_3', coords: [-0.140015, 51.508080], description: 'Descripiton', estimationTime: '14:00', pathTime: '13:00', name: 'Point 3' },
          { id: 'point_4', coords: [-0.139377, 51.508300], description: 'Descripiton', estimationTime: '14:00', pathTime: '13:30', name: 'Point 4' },
          { id: 'point_5', coords: [-0.138758, 51.508384], description: 'Descripiton', estimationTime: '14:00', pathTime: '13:45', name: 'Point 5' },
          { id: 'point_6', coords: [-0.138314, 51.507893], description: 'Descripiton', estimationTime: '14:00', pathTime: '14:00', name: 'Point 6' },
        ],
        [
          { id: 'point_1', coords: [-0.141459, 51.509546], description: 'Descripiton', estimationTime: '12:00', pathTime: '12:00', name: 'Point 1' },
          { id: 'point_1_1', coords: [-0.141155, 51.509213], description: 'Descripiton', estimationTime: '', pathTime: '12:15', name: 'Point 1-1' },
          { id: 'point_2', coords: [-0.140845, 51.508912], description: 'Descripiton', estimationTime: '13:00', pathTime: '12:30', name: 'Point 2' },
          { id: 'point_2_1', coords: [-0.140704, 51.508778], description: 'Descripiton', estimationTime: '', pathTime: '12:35', name: 'Point 2-1' },
          { id: 'point_2_2', coords: [-0.140359, 51.508438], description: 'Descripiton', estimationTime: '', pathTime: '12:45', name: 'Point 2-2' },
          { id: 'point_3', coords: [-0.140015, 51.508080], description: 'Descripiton', estimationTime: '14:00', pathTime: '13:00', name: 'Point 3' },
          { id: 'point_3_1', coords: [-0.139454, 51.508261], description: 'Descripiton', estimationTime: '', pathTime: '13:15', name: 'Point 3-1' },
          { id: 'point_3_2', coords: [-0.138835, 51.508463], description: 'Descripiton', estimationTime: '', pathTime: '13:25', name: 'Point 3-2' },
          { id: 'point_4', coords: [-0.139377, 51.508300], description: 'Descripiton', estimationTime: '14:00', pathTime: '13:30', name: 'Point 4' },
          { id: 'point_4_1', coords: [-0.138416, 51.508018], description: 'Descripiton', estimationTime: '', pathTime: '13:35', name: 'Point 4-1' },
          { id: 'point_5', coords: [-0.138758, 51.508384], description: 'Descripiton', estimationTime: '14:00', pathTime: '13:45', name: 'Point 5' },
          { id: 'point_5_1', coords: [-0.138039, 51.507985], description: 'Descripiton', estimationTime: '', pathTime: '13:35', name: 'Point 5-1' },
          { id: 'point_5_2', coords: [-0.137413, 51.508199], description: 'Descripiton', estimationTime: '', pathTime: '13:35', name: 'Point 5-2' },
          { id: 'point_5_3', coords: [-0.136757, 51.508402], description: 'Descripiton', estimationTime: '', pathTime: '13:35', name: 'Point 5-3' },
          { id: 'point_6', coords: [-0.138314, 51.507893], description: 'Descripiton', estimationTime: '14:00', pathTime: '14:00', name: 'Point 6' },
        ],
        [
          { id: 'point_1', coords: [-0.141459, 51.509546], description: 'Descripiton', estimationTime: '12:00', pathTime: '12:00', name: 'Point 1' },
          { id: 'point_1_1', coords: [-0.141349, 51.509423], description: 'Descripiton', estimationTime: '', pathTime: '12:10', name: 'Point 1-1' },
          { id: 'point_1_2', coords: [-0.141155, 51.509213], description: 'Descripiton', estimationTime: '', pathTime: '12:15', name: 'Point 1-2' },
          { id: 'point_1_3', coords: [-0.140980, 51.509053], description: 'Descripiton', estimationTime: '', pathTime: '12:25', name: 'Point 1-3' },
          { id: 'point_2', coords: [-0.140845, 51.508912], description: 'Descripiton', estimationTime: '13:00', pathTime: '12:30', name: 'Point 2' },
          { id: 'point_2_1', coords: [-0.140704, 51.508778], description: 'Descripiton', estimationTime: '', pathTime: '12:35', name: 'Point 2-1' },
          { id: 'point_2_2', coords: [-0.140561, 51.508640], description: 'Descripiton', estimationTime: '', pathTime: '12:40', name: 'Point 2-2' },
          { id: 'point_2_3', coords: [-0.140359, 51.508438], description: 'Descripiton', estimationTime: '', pathTime: '12:45', name: 'Point 2-3' },
          { id: 'point_2_4', coords: [-0.140202, 51.508273], description: 'Descripiton', estimationTime: '', pathTime: '12:45', name: 'Point 2-4' },
          { id: 'point_3', coords: [-0.140015, 51.508080], description: 'Descripiton', estimationTime: '14:00', pathTime: '13:00', name: 'Point 3' },
          { id: 'point_3_1', coords: [-0.139788, 51.508142], description: 'Descripiton', estimationTime: '', pathTime: '13:15', name: 'Point 3-1' },
          { id: 'point_3_2', coords: [-0.139454, 51.508261], description: 'Descripiton', estimationTime: '', pathTime: '13:15', name: 'Point 3-2' },
          { id: 'point_3_3', coords: [-0.139180, 51.508357], description: 'Descripiton', estimationTime: '', pathTime: '13:15', name: 'Point 3-3' },
          { id: 'point_3_4', coords: [-0.138835, 51.508463], description: 'Descripiton', estimationTime: '', pathTime: '13:25', name: 'Point 3-4' },
          { id: 'point_4', coords: [-0.139377, 51.508300], description: 'Descripiton', estimationTime: '14:00', pathTime: '13:30', name: 'Point 4' },
          { id: 'point_4_1', coords: [-0.138416, 51.508018], description: 'Descripiton', estimationTime: '', pathTime: '13:35', name: 'Point 4-1' },
          { id: 'point_4_2', coords: [-0.138620, 51.508233], description: 'Descripiton', estimationTime: '', pathTime: '13:35', name: 'Point 4-2' },
          { id: 'point_5', coords: [-0.138758, 51.508384], description: 'Descripiton', estimationTime: '14:00', pathTime: '13:45', name: 'Point 5' },
          { id: 'point_5_1', coords: [-0.138039, 51.507985], description: 'Descripiton', estimationTime: '', pathTime: '13:35', name: 'Point 5-1' },
          { id: 'point_5_2', coords: [-0.137413, 51.508199], description: 'Descripiton', estimationTime: '', pathTime: '13:35', name: 'Point 5-2' },
          { id: 'point_5_3', coords: [-0.136757, 51.508402], description: 'Descripiton', estimationTime: '', pathTime: '13:35', name: 'Point 5-3' },
          { id: 'point_5_4', coords: [-0.137718, 51.508104], description: 'Descripiton', estimationTime: '', pathTime: '13:35', name: 'Point 5-4' },
          { id: 'point_5_5', coords: [-0.137030, 51.508317], description: 'Descripiton', estimationTime: '', pathTime: '13:35', name: 'Point 5-5' },
          { id: 'point_6', coords: [-0.138314, 51.507893], description: 'Descripiton', estimationTime: '14:00', pathTime: '14:00', name: 'Point 6' },
        ],
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
