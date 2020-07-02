import styled from 'styled-components'

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.defaultColor.pastel};
  min-width: 1200px;
`

export { PageContainer }
