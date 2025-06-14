import { useState } from 'react'

function MyComponent() {
  const [Fruit, setFruit] = useState(['apple', 'banana', 'mango'])

  function handleAddFruits() {
    const newFruit = document.getElementById('fruitInput').value
    setFruit((f) => [...f, newFruit])
  }

  function handleRemoveFruit(index) {
    setFruit(Fruit.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h1>list of food</h1>
      <ul>
        {Fruit.map((Fruit, index) => (
          <li key={index} onClick={() => handleRemoveFruit(index)}>
            {Fruit}
          </li>
        ))}
      </ul>
      <input type="text" id="fruitInput" placeholder="enter fruit name" />
      <button onClick={handleAddFruits}>add</button>
    </div>
  )
}

export default MyComponent
