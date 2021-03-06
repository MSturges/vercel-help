// import Router from 'next/router'
import { Cookies } from 'react-cookie'
import Home from '../components/Home/index'

// set up cookies
const cookies = new Cookies()
function HomePage({ data: { total, users } }) {
  return <Home total={total} users={users} />
}

HomePage.getInitialProps = async ctx => {
  let token = null

  // if context has request info aka Server Side
  if (ctx.req && ctx.req.headers.cookie) {
    token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')
  } else {
    // we dont have request info aka Client Side
    token = cookies.get('token')
  }

  const query = {
    skip: 0,
    limit: 100,
    sort_column: 'created_at',
    sort_dir: -1,
    q: '',
    id: ''
  }
  const api_url = `http://${ctx.req.headers.host}/api/`
  try {
    const res = await fetch(
      `${api_url}users?skip=${query.skip}&limit=${query.limit}&sort_column=${query.sort_column}&sort_dir=${query.sort_dir}&q=${query.q}`,
      {
        method: 'GET',
        headers: { Authorization: token }
      }
    )
    console.log('res.status', res.status)
    if (res.status === 401) {
      ctx.res.writeHead(302, {
        Location: '/login'
      })
      ctx.res.end()
    }
    console.log('res', res)
    const data = await res.json()
    console.log('data', data)
    return { data }
  } catch (e) {
    console.log('e', e)
  }
}

export default HomePage
