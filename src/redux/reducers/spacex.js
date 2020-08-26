import { spacex as actionType } from '../actions/actionTypes';

const InitialState = {
  programs: [],
  isLoading: true
}

export default (state = InitialState, {type, payload}) => {
  switch(type) {
    // CASES HERE
    case actionType.FETCH_ALL_PROGRAMS : {
      return {
        ...state,
        programs: payload
      }
    }

    case actionType.FETCH_FILTERED_PROGRAMS : {
      return {
        ...state,
        programs: payload
      }
    }

    case actionType.APP_LOADING : {
      return {
        ...state,
        isLoading: payload
      }
    }

    default: return state;
  }
}