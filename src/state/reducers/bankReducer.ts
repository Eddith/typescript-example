import { ActionType } from '../action-type';
import { Action } from '../actions/index';

const initialState = 0;

export const bankReducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSİT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;

    default:
      return state;
  }
};

// typescript course video https://www.youtube.com/watch?v=udr2rx_B99w&t=1130s