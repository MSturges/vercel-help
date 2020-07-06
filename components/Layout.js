import styled from 'styled-components'
import Router from 'next/router'

import { Button } from './UI/index'

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.defaultColor.pastel};
  min-width: 1200px;
`

const NavigationBar = () => {
  return (
    <NavBar>
      <Button fancy glow onClick={() => Router.push('/logout')} label="Logout" loading={false} />
    </NavBar>
  )
}

const NavBar = styled.div`
  background-color: black;
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
`

export { PageContainer, NavigationBar }
