import { useState } from 'react'

function ColourPicker() {
  const [colour, setColour] = useState('#FFFFFF')

  function handleColorChange(event) {
    setColour(event.target.value)
  }

  return (
    <div className="colour-picker">
      <h1 className="head">Colour Picker</h1>
      <div className="colour-display" style={{ background: colour }}>
        <p>Selected Color: {colour}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={colour} onChange={handleColorChange}></input>
    </div>
  )
}

export default ColourPicker
