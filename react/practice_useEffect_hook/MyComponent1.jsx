import { useState, useEffect } from 'react'

function MyComponent1() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  // in this if have not added the useeffect then the event listner have been added
  // countless times but with the help of useeffect the event listner is getting added
  //only one time. and one more thing we can use multiple usestate and useeffect in single file
  useEffect(() => {
    window.addEventListener('resize', changeSize)
    console.log('event listner added')

    return () => {
      window.removeEventListener('resize', changeSize)
      console.log('Event Listner Removed')
    }
  }, [])

  useEffect(() => {
    document.title = `${width} x ${height}`
  })

  function changeSize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return (
    <>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </>
  )
}

export default MyComponent1
