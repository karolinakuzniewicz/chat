import {
  ADD_USER,
  USERS_LIST,
} from "constants/actionTypes";

interface InitialState {
  data: Array<{
    id: number,
    name: string,
  }>;
  error: {};
};

const initialState = {
  data: [],
  error: {},
}

const usersReducer = (state: InitialState = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, data: state.data.concat([{ name: action.name, id: action.id }]), error: {} };
    case USERS_LIST:
      return { ...state, data: action.users, error: {} };
    default:
      return state;
  }
};

export default usersReducer;
