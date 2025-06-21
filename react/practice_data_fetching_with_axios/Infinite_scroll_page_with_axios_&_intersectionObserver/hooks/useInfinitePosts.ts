import { useState, useRef, useEffect } from 'react'
import axiosClient from '../api/axiosClient'

interface post {
  id: number
  title: string
  body: string
}

export function useInfinitePosts(limit: number = 5) {
  const [posts, setPosts] = useState<post[]>([])
  const [page, setPage] = useState(1)
  const [status, setStatus] = useState<
    'idel' | 'loading' | 'success' | 'error'
  >('idel')
  const [hasMore, setHAsMore] = useState(true)
  const observeRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      setStatus('loading')

      try {
        const response = await axiosClient('/posts', {
          params: { _page: page, _limit: limit },
          signal,
        })

        if (response.data.limit < limit) {
          setHAsMore(false)
        }
        setPosts((prev) => [...prev, ...response.data])
        setStatus('success')
      } catch (err: any) {
        if (err.name === 'CanceledError' || err.code === 'ERR_CANCELED') {
          return
        }
        setStatus('error')
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [page, limit])

  const lastElementRef = (node: HTMLDivElement | null) => {
    if (status === 'loading') {
      return
    }

    if (observeRef.current) {
      observeRef.current.disconnect()
    }

    observeRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1)
      }
    })
    if (node) {
      observeRef.current.observe(node)
    }
  }

  return { posts, status, lastElementRef }
}
