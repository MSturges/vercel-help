import { Cookies } from 'react-cookie'
import Router from 'next/router'

const cookies = new Cookies()

const Logout = () => {
  if (typeof window !== 'undefined') {
    cookies.remove('token')

    Router.push('/login')
  }

  return <div>Logout...</div>
}

export default Logout
