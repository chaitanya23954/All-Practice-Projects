import { useState } from 'react'

function MyComponent() {
  const [count, setCount] = useState(0)

  function incerase() {
    setCount((c) => c + 1)
    setCount((c) => c + 1)
    setCount((c) => c + 1)
  }

  function decrese() {
    setCount((c) => c - 1)
    setCount((c) => c - 1)
    setCount((c) => c - 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incerase}>Increae</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrese}>decrese</button>
    </div>
  )
}

export default MyComponent
