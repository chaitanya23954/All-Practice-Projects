import { useState, createContext } from 'react'
import ComponentB from './ComponentB'

export const UserContext = createContext()

function ComponentA() {
  const [user, setUser] = useState('chaitany')

  return (
    <div className="name">
      <h1>Component A</h1>
      <p>{`hi i am ${user}`}</p>
      <UserContext.Provider value={user}>
        <ComponentB giveUser={user} />
      </UserContext.Provider>
    </div>
  )
}

export default ComponentA
