import {GET_PROJECT_LIST} from "./../actions/types";

var initial_state = {

}

export default function(state = initial_state, action) {
  switch (action.type) {
    case GET_PROJECT_LIST:
        return action.payload;
      break;
    default:
      return state;
  }
}
