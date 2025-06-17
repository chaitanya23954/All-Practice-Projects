import { useState, useEffect } from 'react'
// import { fetchData } from './utils/api'

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
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
          { signal }
        )

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data: postData[] = await response.json()
        setData(data)
        setError(null)
      } catch (err: any) {
        if (err.name === 'AbortError') return
        setError(err.message)
        setData([])
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }
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
