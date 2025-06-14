import { useState, useEffect } from 'react'

function MyComponent() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('green')

  // it willl also work if you remove the useeffect but
  // then it will not give you the flexibility of doing
  // things like change DOM when file (every time when file renders)/
  // (only when file get mounted on page)/(only when value changes which we declired in function)
  useEffect(() => {
    document.title = `Count: ${count} ${color}`
  }, [count, color])

  function addCount() {
    setCount((c) => c + 1)
  }

  function reduceCount() {
    setCount((c) => c - 1)
  }

  function changecolor() {
    setColor((c) => (c === 'green' ? 'red' : 'green'))
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={reduceCount}>Subtract</button>
      <br />
      <button onClick={changecolor}>Change Color</button>
    </>
  )
}

export default MyComponent
