import { ADD_POSTS } from '../constants'

function posts_reduser(arr = [], action) {
  const { type, data } = action
  switch (type) {
    case ADD_POSTS:
      let newArr = [...arr, ...data]
      return newArr
    default:
      return arr
  }
}
export default posts_reduser
