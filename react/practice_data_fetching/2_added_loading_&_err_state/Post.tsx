import { useState, useEffect } from 'react'

interface postDta {
  id: number
  title: string
  body: string
  userId: number
}

function Post() {
  const [data, setData] = useState<postDta | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(`HTTP error! Status: ${response.status}`)
      })

      .then((json: postDta) => {
        setData(json)
        setError(null)
      })
      .catch((err: Error) => {
        setError(err.message)
        setData(null)
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
      <h2>Post Data</h2>
      {data && (
        <div>
          <p>
            <strong>Title:</strong>
            {data.title}
          </p>
          <p>
            <strong>Body:</strong>
            {data.body}
          </p>
        </div>
      )}
    </div>
  )
}

export default Post
