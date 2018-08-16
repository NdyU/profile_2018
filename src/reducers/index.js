import { combineReducers } from 'redux';

import projectsReducer from './projects';
import profileReducer from './profile';

export default combineReducers({
  projects: projectsReducer,
  profile: profileReducer,
});
