import { useNavigate } from 'react-router-dom'

function Home() {
  const Navigate = useNavigate()

  function handler() {
    Navigate('/about')
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handler}>Go To About Page</button>
    </div>
  )
}

export default Home
