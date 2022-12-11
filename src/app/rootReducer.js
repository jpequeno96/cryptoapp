import { combineReducers } from '@reduxjs/toolkit';
import { reducer as authReducer } from 'src/redux/slices/auth';
import { reducer as storiesReducer } from 'src/redux/slices/stories';
import { storiesApi } from 'src/services/storiesService'

const appReducer = combineReducers({
  auth: authReducer,
  stories: storiesReducer,
  [storiesApi.reducerPath]: storiesApi.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return appReducer(state, action);
};

export const resetAppAction = () => dispatch => {
  console.log('Reset Redux Store');
  dispatch({ type: 'RESET_APP' });
};

export default rootReducer;