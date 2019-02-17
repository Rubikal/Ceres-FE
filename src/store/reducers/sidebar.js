import { Map } from 'immutable';
import * as uiActionTypes from '../action-types/ui';
import { getLocalStorage } from '../../helpers/cache';

const initialState = Map({
  nightMode: JSON.parse(getLocalStorage('nightMode')),
});

const sidebar = (state = initialState, action) => {
  switch (action.type) {
    case uiActionTypes.SET_NIGHT_MODE:
      return state.set('nightMode', action.payload);

    default:
      return state;
  }
};

export default sidebar;
