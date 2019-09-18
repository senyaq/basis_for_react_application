import React, { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'

import { getPosts } from './../store/actions/action_posts'

function Home(props) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    props.posts.length === 0 ? props.getPosts(1) : setPosts(props.posts)
  }, [props, setPosts])

  return (
    <Fragment>
      <h1>Home</h1>
      {posts.length < 1 && <h3>Loading ...</h3>}
      <ul>{posts.length > 0 && posts.map(item => <li key={`${item.id}`}>{item.title}</li>)}</ul>
    </Fragment>
  )
}

export default connect(
  state => ({
    posts: state.posts,
  }),
  { getPosts }
)(Home)
