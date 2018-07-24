import {
  ADD_MESSAGE,
  MESSAGE_RECEIVED,
} from "constants/actionTypes";

interface InitialState {
  data: Array<{
    author: string,
    id: number,
    message: string,
  }>;
  error: {};
};

const initialState = {
  data: [],
  error: {},
}

const messagesReducer = (state: InitialState = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
    case MESSAGE_RECEIVED:
      return {
        ...state,
        data: state.data.concat([
          {
            author: action.author,
            id: action.id,
            message: action.message,
          }
        ]),
        error: {},
      };
    default:
      return state;
  }
};

export default messagesReducer;
