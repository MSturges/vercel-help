import styled from 'styled-components'
import UsersTable from './UsersTable/index'

import { PageContainer } from '../UI/index'

const Home = ({ total, users }) => {
  return (
    <PageContainer>
      <UsersTable total={total} users={users} />
    </PageContainer>
  )
}

Home.displayName = 'Home'

export default Home
