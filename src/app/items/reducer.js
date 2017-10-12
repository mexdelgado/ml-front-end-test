// Action Types
import { FETCH_POSTS, FETCH_POST } from './actionTypes';

const initialState = {
  posts: [],
  post: []
};

export default function blogReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_POSTS.success(): {
      return {
        ...state,
        posts: action.payload
      };
    }

    case FETCH_POST.success(): {
      return {
        ...state,
        post: action.payload
      };
    }

    default:
      return state;
  }
}
