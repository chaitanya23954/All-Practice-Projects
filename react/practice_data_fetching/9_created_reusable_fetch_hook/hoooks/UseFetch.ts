import { useEffect, useState } from 'react'

export function UseFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [status, setStatus] = useState<
    'idel' | 'loading' | 'success' | 'error'
  >('idel')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      setStatus('loading')

      try {
        const response = await fetch(url, { signal })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const jsonData = await response.json()
        setData(jsonData)
        setStatus('success')
        setError(null)
      } catch (err: any) {
        if (err.name === 'AbortError') {
          setError(err.message)
          setStatus('error')
        }
      }
    }
    fetchData()

    return () => {
      controller.abort
    }
  }, [url])

  return { data, status, error }
}
