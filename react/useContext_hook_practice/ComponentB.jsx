import { useContext } from 'react'
import ComponentC from './ComponentC'

import { UserContext } from './ComponentA'

function ComponentB() {
  const getUser = useContext(UserContext)

  return (
    <div className="name">
      <h1>Component B</h1>
      <p>hello {getUser}</p>
      <ComponentC />
    </div>
  )
}
export default ComponentB
