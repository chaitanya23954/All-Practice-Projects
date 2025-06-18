import React, { useState } from 'react'

interface post {
  body: string
  title: string
  userid: number
}

function PostForm() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [ststus, setStatus] = useState<
    'idel' | 'submitting' | 'success' | 'error'
  >('idel')
  const [error, setError] = useState<string | null>(null)

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    const newPost: post = {
      title,
      body,
      userid: 1,
    }
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPost),
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const result: post = await response.json()
      console.log('post sent successfullu:', result)
      setStatus('success')
      setTitle('')
      setBody('')
      setError(null)
    } catch (err: any) {
      setStatus('error')
      setError(err.message)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <h1>Post Data Using This Form</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={ststus === 'submitting'}>
        Submit
      </button>
      {ststus === 'success' && <p>Post submitted successfully.</p>}
      {ststus === 'error' && <p>Error: {error}</p>}
    </form>
  )
}

export default PostForm
