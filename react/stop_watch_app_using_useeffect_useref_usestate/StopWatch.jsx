import { useEffect, useRef, useState } from 'react'

// how stop watch work:- (first we get time in mili seconds then convert it into hh:mm:ss)
// how to cal current time = use function Date().now ------- this is the function which gives you the time from the when your pc is started in miliseconds
// ---------- startTimeRef is the time which we want to see when we hit the start button
// startTimeRef - how to cal running time(stop watch time) = current time - elapsedtime.  ------- elapsed time is the time on the moment when we hit the start button from the start of the current time
// how to calculate elapsed time = current time - starttimeref
function StopWatch() {
  const [isRunning, setIsRunning] = useState(false) // when its true when the stop watch will be running and if if it is false then the stop watch will stop running
  const [elapsedTime, setElapsedTime] = useState(0) // explained above
  const intervalIdRef = useRef(null) // this is used to stop the inbuild setinterval function
  const startTimeRef = useRef(0) // explained above

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current)
      }, 10)
    }

    return () => {
      clearInterval(intervalIdRef.current)
    }
  }, [isRunning])

  function start() {
    setIsRunning(true)
    startTimeRef.current = Date.now() - elapsedTime
  }

  function stop() {
    setIsRunning(false)
  }

  function reset() {
    setElapsedTime(0)
    setIsRunning(false)
  }

  function formatTime() {
    let hour = Math.floor(elapsedTime / (1000 * 60 * 60 * 60))
    let minuit = Math.floor((elapsedTime / (1000 * 60)) % 60)
    let second = Math.floor((elapsedTime / 1000) % 60)
    let milisecond = Math.floor((elapsedTime % 1000) / 10)

    hour = String(hour).padStart(2, '0')
    minuit = String(minuit).padStart(2, '0')
    second = String(second).padStart(2, '0')
    milisecond = String(milisecond).padStart(2, '0')
    return `${hour}:${minuit}:${second}:${milisecond}`
  }

  return (
    <div className="stop-watch">
      <div className="display">{formatTime()}</div>
      <div className="controles">
        <button className="start-button" onClick={start}>
          Start
        </button>
        <button className="stop-button" onClick={stop}>
          Stop
        </button>
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
      </div>
      <p>{intervalIdRef.current}</p>
    </div>
  )
}

export default StopWatch
