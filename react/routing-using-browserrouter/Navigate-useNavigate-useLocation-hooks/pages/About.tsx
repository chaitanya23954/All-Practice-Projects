import { useLocation } from 'react-router-dom'

function About() {
  const Location = useLocation()

  return <h1>Your In {Location.pathname} Page</h1>
}

export default About
