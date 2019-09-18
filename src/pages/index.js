import React, { useEffect, useState, Fragment } from 'react'
import api from './../lib//api'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.getUserPosts(1).then(response => setPosts(response))
  }, [setPosts])

  return (
    <Fragment>
      <h1>Home2</h1>
      {posts.length < 1 && <h3>Loading ...</h3>}
      <ul>{posts.length > 0 && posts.map(item => <li key={`${item.id}`}>{item.title}</li>)}</ul>
    </Fragment>
  )
}

export default Home
