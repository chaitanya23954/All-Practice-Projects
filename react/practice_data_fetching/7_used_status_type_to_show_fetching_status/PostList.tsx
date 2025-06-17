import { useState, useEffect } from 'react'
// import { fetchData } from './utils/api'

interface postData {
  id: number
  title: string
  body: string
  userId: number
}

type status = 'idle' | 'sucess' | 'loading' | 'error'

function PostList() {
  const [data, setData] = useState<postData[]>([])
  const [status, setStatus] = useState<status>('idle')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        { signal }
      )
      try {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data: postData[] = await response.json()
        setData(data)
        setStatus('sucess')
        setError(null)
      } catch (err: any) {
        if (err.name === 'AbortError') return
        setError(err.message)
        setStatus('error')
        setData([])
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [])
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
