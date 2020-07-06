import styled from 'styled-components'
import UsersTable from './UsersTable/index'

import { PageContainer, NavigationBar } from '../Layout'

const Home = ({ total, users }) => {
  return (
    <PageContainer>
      <NavigationBar />
      <UsersTable total={total} users={users} />
    </PageContainer>
  )
}

Home.displayName = 'Home'

export default Home
