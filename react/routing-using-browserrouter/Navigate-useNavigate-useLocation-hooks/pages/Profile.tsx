import { Navigate } from 'react-router-dom'

function Profile() {
  const IsLogin = false

  if (!IsLogin) {
    return <Navigate to="/" replace />
  }

  return <h1>This is user profile page</h1>
}

export default Profile
