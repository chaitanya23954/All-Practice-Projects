import { useState, useEffect } from 'react'

function DigitalClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  function formatTime() {
    let hour = time.getHours()
    const minuit = time.getMinutes()
    const second = time.getSeconds()

    const merdian = hour > 12 ? 'PM' : 'AM'

    hour = hour % 12 || 12

    return `${padZero(hour)}:${padZero(minuit)}:${padZero(second)} ${merdian}`
  }

  function padZero(number) {
    return number < 10 ? '0' + number : number
  }

  return (
    <div className="clockcontainer">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  )
}

export default DigitalClock
