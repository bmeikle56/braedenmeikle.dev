import { useEffect, useState } from 'react'

export function useLoading(duration = 2000) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), duration)
    return () => clearTimeout(t)
  }, [duration])

  return loading
}