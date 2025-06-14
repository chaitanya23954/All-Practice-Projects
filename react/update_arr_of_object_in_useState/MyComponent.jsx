import { useState } from 'react'

function MyComponent() {
  const [cars, setCar] = useState([
    { Year: 2025, Make: 'Mahindra', Model: 'Thar' },
  ])
  const [carYear, setCarYear] = useState(new Date().getFullYear())
  const [carMake, setCarMake] = useState('')
  const [carModel, setCarModel] = useState('')

  function addNewCar() {
    const newCar = { Year: carYear, Make: carMake, Model: carModel }

    setCar((c) => [...c, newCar])

    setCarYear(new Date().getFullYear())
    setCarMake('')
    setCarModel('')
  }

  function removeCar(index) {
    setCar(cars.filter((_, i) => i !== index))
  }

  function handleYearChange(event) {
    setCarYear(event.target.value)
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value)
  }

  function handleModelChange(event) {
    setCarModel(event.target.value)
  }

  return (
    <div>
      <h1>List Of Cars Car</h1>
      <ul>
        {cars.map((c, index) => (
          <li key={index} onClick={() => removeCar(index)}>
            {c.Year} {c.Make} {c.Model}
          </li>
        ))}
      </ul>
      <input type="number" onChange={handleYearChange} value={carYear} />
      <br />
      <input
        onChange={handleMakeChange}
        placeholder="Enter Car Make"
        value={carMake}
      />
      <br />
      <input
        onChange={handleModelChange}
        placeholder="Enter Car Model"
        value={carModel}
      />
      <br />
      <button onClick={addNewCar}>Add Car</button>
    </div>
  )
}

export default MyComponent
