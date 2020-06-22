import React from 'react'

const Navbar = () => {
  const [, { mutate }] = useUser()
  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE'
    })
    // set the user state to null
    mutate(null)
  }
  return (
    /* ... */
    <button onClick={handleLogout}>Logout</button>
    /* ... */
  )
}
