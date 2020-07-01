import styled from 'styled-components'
import UsersTable from './UsersTable/index'

const Home = ({ total, users }) => {
  return (
    <Container>
      <UsersTable total={total} users={users} />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.defaultColor.pastel};
`
Home.displayName = 'Home'

export default Home
