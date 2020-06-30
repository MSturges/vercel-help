import Router from 'next/router'
import { Cookies } from 'react-cookie'
// set up cookies
const cookies = new Cookies()

export async function handleAuthSSR(ctx) {
  let token = null

  // if context has request info aka Server Side
  if (ctx.req) {
    // ugly way to get cookie value from a string of values
    // good enough for demostration
    token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')
  } else {
    // we dont have request info aka Client Side
    token = cookies.get('token')
  }

  try {
    const res = await fetch('/api/ping', {
      method: 'GET',
      headers: { Authorization: token }
    })

    const response = await res.json()
    // dont really care about response, as long as it not an error
    // console.log('token ping:', response)
  } catch (err) {
    // in case of error
    console.log('handle auth ssr', err)
    console.log('redirecting back to main page')
    // redirect to login
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: '/login'
      })
      ctx.res.end()
    } else {
      Router.push('/')
    }
  }
}
