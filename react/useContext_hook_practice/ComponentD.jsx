import { useContext } from 'react'

import { UserContext } from './ComponentA'

function ComponentD() {
  const getUser = useContext(UserContext)

  return (
    <div className="name">
      <h1>Component D</h1>
      <p>{`hello ${getUser}`}</p>
    </div>
  )
}

export default ComponentD
