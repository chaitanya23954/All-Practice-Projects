import { useState, useEffect, useRef } from 'react'

function MyComponent() {
  // useReff is samee like useState, if usestate stores a value then useRef stires
  // keyValue (object) and it did not render every time value changes but in case
  // of usestate page renders each time when value changes
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)

  // this will console log every time when page renders
  useEffect(() => {
    console.log('Component Renderd')
  })

  function onClickHandler1() {
    inputRef1.current.focus()
    inputRef1.current.style.backgroundColor = 'yellow'
    inputRef2.current.style.backgroundColor = ''
    inputRef3.current.style.backgroundColor = ''
  }

  function onClickHandler2() {
    inputRef2.current.focus()
    inputRef1.current.style.backgroundColor = ''
    inputRef2.current.style.backgroundColor = 'yellow'
    inputRef3.current.style.backgroundColor = ''
  }

  function onClickHandler3() {
    inputRef3.current.focus()
    inputRef1.current.style.backgroundColor = ''
    inputRef2.current.style.backgroundColor = ''
    inputRef3.current.style.backgroundColor = 'yellow'
  }

  return (
    <div className="name">
      <button onClick={onClickHandler1}>add</button>
      <input ref={inputRef1} />
      <br />
      <button onClick={onClickHandler2}>add</button>
      <input ref={inputRef2} />
      <br />
      <button onClick={onClickHandler3}>add</button>
      <input ref={inputRef3} />
    </div>
  )
}

export default MyComponent
