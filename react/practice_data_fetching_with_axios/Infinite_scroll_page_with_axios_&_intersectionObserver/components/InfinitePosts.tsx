import { useInfinitePosts } from '../hooks/useInfinitePosts'

function InfinitePosts() {
  const { posts, status, lastElementRef } = useInfinitePosts(5)

  return (
    <div>
      <h1>Infinite Scroll Posts</h1>
      {posts.map((post, index) => {
        const isLast = index === posts.length - 1
        return (
          <div
            key={post.id}
            ref={isLast ? lastElementRef : null}
            style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc' }}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )
      })}

      {status === 'loading' && <p>more loading...</p>}
      {status === 'error' && <p>Failed To Load Posts</p>}
    </div>
  )
}

export default InfinitePosts
