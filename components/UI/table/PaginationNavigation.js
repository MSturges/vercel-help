import React from 'react'
import styled, { css } from 'styled-components'

const PaginationNavigation = ({
  page,
  pageSize,
  numberOfPages,
  handlePreviousChange,
  handleNextChange,
  handleSetPageSize,
  total,
  dataItemName
}) => (
  <PaginationWrapper>
    <PaginationTotalWrapper>
      <PageSpan>{`${total} Total ${dataItemName}`}</PageSpan>
    </PaginationTotalWrapper>
    <PaginationToolsWrapper>
      <PageSpan>Page</PageSpan>
      <PageInput size={`${page}`.split('').length} disabled value={page + 1} />
      <PageSpan>of {numberOfPages}</PageSpan>
      <PageSelect defaultValue={pageSize} onChange={e => handleSetPageSize(e.target.value)}>
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={15}>15 per page</option>
        <option value={20}>20 per page</option>
        <option value={25}>25 per page</option>
        <option value={50}>50 per page</option>
      </PageSelect>
      <PaginationButton onClick={(e) => handlePreviousChange(e)} disabled={page === 0} type="button">
        <svg className="icon">
          <use xlinkHref="#icon-left-chevron" />
        </svg>
      </PaginationButton>
      <PaginationButton
        onClick={e => handleNextChange(e)}
        rotate="Im actually a cat"
        disabled={page >= numberOfPages - 1}
        type="button"
      >
        <svg className="icon">
          <use xlinkHref="#icon-left-chevron" />
        </svg>
      </PaginationButton>
    </PaginationToolsWrapper>
  </PaginationWrapper>
)

const PaginationWrapper = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  /* background-color: ${({ theme }) => theme.defaultColor.pastel}; */
`

const PaginationButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  border: 0;
  border-radius: 1rem;
  padding: 6px;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.1);
  transition: all 0.1s ease;
  cursor: pointer;
  outline: none;
  margin-left: 1rem;

  ${({ rotate }) =>
    rotate
      ? css`
          svg {
            transform: rotate(180deg);
          }
        `
      : css``}

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
  }

  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.5;
          cursor: not-allowed;

          &:hover {
            background: rgba(0, 0, 0, 0.1);
            color: rgba(0, 0, 0, 0.6);
          }
        `
      : ''}
`

const PaginationTotalWrapper = styled.div`
  display: flex;
  align-items: center;
`
const PaginationToolsWrapper = styled.div``

const PageSpan = styled.span`
  font-weight: 700;
  font-size: 0.8125em;
  color: rgba(86, 87, 104, 0.6);
`

const PageInput = styled.input`
  /* min-width: 2rem; */
  border: none;
  border-radius: 6px;
  padding: 0.25rem;
  text-align: center;
  background: rgba(86, 87, 104, 0.15);
  margin: 0 0.5rem;
  color: rgba(86, 87, 104, 0.6);
  outline: none;

  height: 1.65rem;
`

const PageSelect = styled.select`
  margin-left: 1rem;
  flex: 1;
  outline: 0;
  box-shadow: none;
  padding: 0 2em 0 0.5em;
  background: none;
  background-image: none;
  color: rgba(86, 87, 104, 0.4);
  cursor: pointer;
  padding: 0.5em 1.5em 0.5em 0.75em;
  font-weight: 400;
  font-size: 0.875em;
  line-height: 1.3;
  -webkit-letter-spacing: 0.015em;
  -moz-letter-spacing: 0.015em;
  -ms-letter-spacing: 0.015em;
  letter-spacing: 0.015em;
  -webkit-transition: all 0.15s linear;
  transition: all 0.15s linear;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 5px 7px;
  font-size: inherit;
  border-radius: 3px;
  font-weight: normal;
  outline: none;
`

PaginationNavigation.displayName = 'PaginationNavigation'
export { PaginationNavigation }
