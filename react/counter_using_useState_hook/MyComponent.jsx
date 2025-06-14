import { useState } from 'react'

function MyComponent() {
  const [name, setName] = useState('guest')
  const [age, setage] = useState(0)
  const [isemployed, setisemployed] = useState(true)

  const changeName = () => {
    setName('Naruto')
  }

  const increaseAge = () => {
    setage(age + 1)
  }

  const EmployeedStatus = () => {
    setisemployed(!isemployed)
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={changeName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={increaseAge}>Increase Age</button>

      <p>Is Employeed: {isemployed ? 'Yes' : 'No'}</p>
      <button onClick={EmployeedStatus}>Increase Age</button>
    </div>
  )
}
export default MyComponent
