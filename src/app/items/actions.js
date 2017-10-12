// Api
import MlApi from './api';

// Action Types
import { FETCH_POSTS, FETCH_POST } from './actionTypes';

// ALL ITEMS
export const fetchPosts = (fetchingFrom, query) => dispatch => {

  //console.log('[i] TYPEGET 2: ',typeGet);
  //console.log(query);

  const requestPosts = () => ({
    type: FETCH_POSTS.request()
  });

  const receivedPosts = posts => ({
    type: FETCH_POSTS.success(),
    payload: posts
  });

  dispatch(requestPosts());

  return MlApi.getAllPosts(query, fetchingFrom)
    .then(posts => dispatch(receivedPosts(posts)));
};

// SINGLE ITEM
export const fetchPost = (fetchingFrom, query) => dispatch => {

  //console.log('[i] TYPEGET 2: ',typeGet);
  //console.log(query);

  const requestPost = () => ({
    type: FETCH_POST.request()
  });

  const receivedPost = post => ({
    type: FETCH_POST.success(),
    payload: post
  });

  dispatch(requestPost());

  return MlApi.getPost(query, fetchingFrom)
    .then(post => dispatch(receivedPost(post)));
};

