/* eslint-disable react/prop-types */
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import { rgba } from 'polished'

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  handleSearchDataByTerm,
  handleClearSearchTerm
}) => (
  <StyledWrapper>
    <StyledSearchWrap>
      <SearchInput
        type="text"
        rounded
        placeholder="Search contacts by email..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            handleSearchDataByTerm()
          }
        }}
      />
      <CloseBtn
        searchQuery={searchTerm}
        onClick={e => {
          e.persist()
          handleClearSearchTerm()
        }}
      />
    </StyledSearchWrap>
  </StyledWrapper>
)

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 5;
  background: ${props => props.theme.defaultColor.white};
  border-bottom: 1px solid ${({ theme }) => theme.defaultColor.pastel};
`

const StyledSearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2rem 0 1rem;
`
const SearchInput = styled.input`
  border: none;
  color: ${props => props.theme.defaultColor.darkPurple};
  border-radius: 0;
  padding: 1.25rem 5rem 1.25rem 1rem;
  width: 100%;
  background: white;
  -webkit-appearance: none;
  outline: none;
  font-family: 'pragmatica', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 300;
  font-size: 1.25em;
  line-height: 1.95;
  transition: all 0.2s linear;

  :focus + button {
    visibility: visible;
    opacity: 1;
  }
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
SearchBar.displayName = 'SearchBar'

export default SearchBar
