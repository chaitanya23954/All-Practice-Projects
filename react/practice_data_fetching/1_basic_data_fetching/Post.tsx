import { useState, useEffect } from 'react'

interface postData {
  id: number
  title: string
  body: string
  userId: number
}

function Post() {
  const [data, setData] = useState<postData | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json: postData) => setData(json))
      .catch((err) => console.error('Error fetching data', err))
  }, [])

  return (
    <div>
      <h2>Post Data:</h2>
      {data ? (
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Post
