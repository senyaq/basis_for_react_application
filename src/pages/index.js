import React, { useEffect, useState, Suspense } from 'react'

// import withAuth from './../lib/withAuth'
import api from './../lib/api'

const OtherComponent = React.lazy(() => import('../partials/OtherComponent'))

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.getUserPosts(1).then(response => setPosts(response))
  }, [setPosts])

  return (
    <>
      <h1>Home</h1>
      <Suspense fallback={<div>Loading2...</div>}>
        <OtherComponent posts={posts} />
      </Suspense>
    </>
  )
}

// export default withAuth(Home)
export default Home
