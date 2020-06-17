import React from 'react'
import styled from 'styled-components'
import Spinner from './Spinner'

const FullPageLoader = props => (
  <Wrapper>
    <CustomSpinner {...props} />
  </Wrapper>
)

const SelectLoader = props => (
  <SelectWrapper>
    <CustomSpinner {...props} />
  </SelectWrapper>
)

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`
const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const CustomSpinner = styled(Spinner)`
  position: absolute;
`

FullPageLoader.defaultProps = {
  active: true,
  color: '#8040ff',
  ringColor: '#dfdfdf',
  width: '2rem',
  height: '2rem'
}

SelectLoader.defaultProps = {
  active: true,
  color: '#8040ff',
  ringColor: '#dfdfdf',
  width: '2rem',
  height: '2rem'
}

export { FullPageLoader, SelectLoader }
