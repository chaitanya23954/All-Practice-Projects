import { UseFetch } from './hoooks/UseFetch'

interface Post {
  title: string
  body: string
  userId: number
  id: number
}

function PostList() {
  const {
    data: posts,
    status,
    error,
  } = UseFetch<Post[]>('https://jsonplaceholder.typicode.com/posts')

  if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'error') {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts?.slice(0, 5).map((post) => (
          <li key={post.id}>
            <strong>Title: </strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
