import {GET_PROFILE} from "./../actions/types";

var initial_state = {

}

export default function(state = initial_state, action) {
  switch (action.type) {
    case GET_PROFILE:
        return action.payload;
      break;
    default:
      return state;
  }
}
