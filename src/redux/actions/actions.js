import { spacex as actionType } from './actionTypes';
import ExternalServices from '../../services/externalServices';

export const fetchAllPrograms = () => async (dispatch) =>{
  await dispatch(appLoader(true));
  const programs = await ExternalServices.getAllPrograms();
  dispatch({
    type: actionType.FETCH_ALL_PROGRAMS,
    payload: programs
  });

  await dispatch(appLoader(false));
};

export const fetchFilteredPrograms = (requestObject) => async(dispatch) => {
  await dispatch(appLoader(true));
  const filteredPrograms = await ExternalServices.getFilteredPrograms(requestObject);

  dispatch({
    type: actionType.FETCH_FILTERED_PROGRAMS,
    payload: filteredPrograms
  });

  await dispatch(appLoader(false));
}

export const appLoader = (state) => async (dispatch) => {
  dispatch({
    type: actionType.APP_LOADING,
    payload: state
  });
}