import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <nav>
        <Link to="user">User Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Dashboard
