import { useState, useEffect } from 'react'

interface postData {
  id: number
  title: string
  body: string
  userId: number
}

function PostList() {
  const [data, setData] = useState<postData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<String | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(`HTTP error! Status: ${response.status}`)
      })

      .then((json: postData[]) => {
        setData(json)
        setError(null)
      })

      .catch((err: Error) => {
        setError(err.message)
        setData([])
      })

      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <h2>All Posts:</h2>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>
            <strong>{post.title}:</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default PostList
