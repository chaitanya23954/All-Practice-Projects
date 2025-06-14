function Button() {
  const OnClickEvent = (e) => (e.target.textContent = 'OUCH!')

  return <button onClick={(e) => OnClickEvent(e)}>click me</button>
}

export default Button
