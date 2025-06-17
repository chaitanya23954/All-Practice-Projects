export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url)

  if (response.ok) {
    const data: T = await response.json()
    return data
  }
  throw new Error(`HTTP error! status: ${response.status}`)
}
