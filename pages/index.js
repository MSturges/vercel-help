import { Cookies } from 'react-cookie'
import Home from '../components/Home/index'
import { handleAuthSSR } from '../utils/auth'


function HomePage() {
  console.log('home page')
  return <Home />
}

HomePage.getInitialProps = async ctx => {
  // Must validate JWT
  // If the JWT is invalid it must redirect
  // back to the main page. You can do that
  // with Router from 'next/router
  await handleAuthSSR(ctx)

  // Must return an object
  return {}
}

export default HomePage
