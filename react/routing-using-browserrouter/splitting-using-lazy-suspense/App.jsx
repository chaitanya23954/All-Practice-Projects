import { Routes, Route, Link, Outlet } from 'react-router-dom'
// import { About } from './pages/About'
// import Store from './pages/Store'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() =>
  import('./pages/About').then((module) => {
    return { default: module.About }
  })
)
const Store = lazy(() => import('./pages/Store'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Route>
    </Routes>
  )
}

function NavWrapper() {
  return (
    <>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </nav>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default App
