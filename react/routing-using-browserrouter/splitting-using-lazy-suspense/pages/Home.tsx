import { useState, lazy, Suspense } from 'react'
// import { AdminData } from './AdminData'

const AdminData = lazy(() =>
  import('./AdminData').then((module) => {
    return { default: module.AdminData }
  })
)

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <>
      <h1>Home Page</h1>
      <button
        onClick={() => {
          {
            import('../sum').then((module) => alert(module.sum(2, 2)))
          }
        }}
      >
        Add 2 + 2
      </button>
      <br />
      <br />
      <button onClick={() => setIsAdmin((prev) => !prev)}>
        Toggle IsAdmin
      </button>
      <Suspense fallback={<p>Loading...</p>}>
        {isAdmin ? <AdminData /> : <p>Not A Admin</p>}
      </Suspense>
    </>
  )
}
