'use client'
export default function Home() {
  const ll = async () => {
    await fetch('/api/testr', {
      method: 'GET',
      // body: JSON.stringify({ name: 'John' }),
    })
  }

  return (
    <button onClick={ll}>Click me</button>
  )
}
