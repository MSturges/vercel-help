import fetch from 'isomorphic-unfetch'
import Home from '../components/Home/index'

function HomePage() {
  return <Home />
}

// HomePage.getInitialProps = async ({ req, query }) => {
//   const protocol = req ? `${req.headers['x-forwarded-proto']}:` : location.protocol
//   const host = req ? req.headers['x-forwarded-host'] : location.host
//   const pageRequest = `${protocol}//${host}/api/profiles?page=${query.page ||
//     1}&limit=${query.limit || 9}`
//   const res = await fetch(pageRequest)
//   const json = await res.json()
//   return json
// }

export default HomePage
