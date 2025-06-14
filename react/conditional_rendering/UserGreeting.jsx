import PropType from 'prop-types'

function UserGreeting(props) {
  const welcomemsg = <h2 className="login">welcome {props.username}</h2>
  const failedmsg = <h2 className="failed">login failed</h2>
  return props.Isloggedin ? welcomemsg : failedmsg
}

UserGreeting.PropType = {
  username: PropType.string,
  Isloggedin: PropType.bool,
}

export default UserGreeting
