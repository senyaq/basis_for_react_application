import { ADD_POSTS } from '../constants'

import api from './../../lib/api'

// example sync actions with `dispatch` (with help 'redux-thunk' lib)
export function getPosts(userId) {
  return dispatch => {
    api.getUserPosts(userId).then(response => {
      dispatch({
        type: ADD_POSTS,
        data: response,
      })
    })
  }
}

// example async actions with `dispatch`
// export function getPosts(userId) {
//     return {
//       type: ADD_POSTS,
//       data: [],
//     };
//   }
