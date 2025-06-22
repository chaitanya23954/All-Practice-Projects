import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'
import About from './pages/About'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="user">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="user" element={<Profile />} />

        <Route path="settings" element={<Settings />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default App
