import { useState } from 'react'

function CounterComp() {
  const [count, setcount] = useState(0)

  const decrese = () => {
    setcount(count - 1)
  }

  const reset = () => {
    setcount(0)
  }

  const incerase = () => {
    setcount(count + 1)
  }

  return (
    <div className="counter-container">
      <p className="count-number">{count}</p>
      <button className="counter-button" onClick={decrese}>
        Decrease
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={incerase}>
        Increse
      </button>
    </div>
  )
}

export default CounterComp
