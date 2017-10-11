// Api
import MlApi from './api';

// Action Types
import { FETCH_POSTS } from './actionTypes';

export const fetchPosts = (fetchingFrom, query, typeGet) => dispatch => {
  const requestPosts = () => ({
    type: FETCH_POSTS.request()
  });

  const receivedPosts = posts => ({
    type: FETCH_POSTS.success(),
    payload: posts
  });

  dispatch(requestPosts());

  //console.log('[i] TYPEGET 2: ',typeGet);
  //console.log(query);

  if (typeGet === 'all'){
    //console.log('[I] GET ALL POSTS');
    //console.log(query);
    return MlApi.getAllPosts(query, fetchingFrom)
      .then(posts => dispatch(receivedPosts(posts)));
  }else{
    //console.log('[I] GET SINGLE POST');
    //console.log(query);
    return MlApi.getPost(query, fetchingFrom)
      .then(posts => dispatch(receivedPosts(posts)));
  }
};

