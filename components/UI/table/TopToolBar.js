import React, { useEffect, useCallback } from 'react'
import { fadeIn } from 'react-animations'
import { rgba } from 'polished'
import styled, { keyframes } from 'styled-components'

const TopToolBar = ({
  searchTerm,
  setSearchTerm,
  handleSearchDataByTerm,
  handleClearSearchTerm,
  ToolBarActions,
  dataItemName
}) => {
  const escFunction = useCallback(event => {
    if (event.keyCode === 27) {
      handleClearSearchTerm(event)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)

    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [])

  return (
    <TooLBarWrapper>
      <StyledSearchWrap>
        <SearchInput
          type="text"
          name="code"
          autocomplete="off"
          placeholder={`Search ${dataItemName}...`}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              e.preventDefault()
              handleSearchDataByTerm(e)
            }
          }}
        />
        <CloseBtn searchQuery={searchTerm} onClick={() => handleClearSearchTerm()} />
      </StyledSearchWrap>
      <BtnRight>
        <ToolBarActions />
      </BtnRight>
    </TooLBarWrapper>
  )
}

const TooLBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.defaultColor.white};
  width: 100%;
  z-index: 2;

  border-bottom: 1px ${({ theme }) => theme.defaultColor.pastel};

  div {
    margin-bottom: 0;
  }
`

const StyledSearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2rem 0 1rem;
  /* max-width: 30rem; */
`

const SearchInput = styled.input`
  height: 5rem;
  padding: 1rem;
  outline: none;
  border: none;
  /* max-width: 30rem; */
  width: 100%;
`
const fadeInAnimation = keyframes`${fadeIn}`

const CloseBtn = styled.div`
  display: ${props => (props.searchQuery ? 'block' : 'none')};
  animation: 0.5s ${fadeInAnimation};
  overflow: hidden;
  pointer-events: auto;
  margin-top: -0.75rem;
  background: ${props => rgba(props.theme.defaultColor.midPurple, 0.2)};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  text-align: center;
  font-size: 1em;
  line-height: 1.5;
  z-index: 100;
  cursor: pointer;
  transition: all 0.15s linear;
  margin-top: 4px;
  &::before {
    color: ${props => props.theme.defaultColor.white};
    content: 'close';
    font-family: 'Material Icons';
  }

  &:hover {
    background: ${props => props.theme.defaultColor.midPurple};
  }
`

const BtnRight = styled.div`
  display: flex;
  padding: 1.5rem 1rem 1.5rem 2rem;
  min-width: 11.65rem;
  border-left: 1px solid ${({ theme }) => theme.defaultColor.pastel};
`

TopToolBar.displayName = 'TopToolBar'

export { TopToolBar }
