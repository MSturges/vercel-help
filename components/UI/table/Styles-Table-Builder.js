import { rgba } from 'polished'
import styled, { css } from 'styled-components'

export const TableWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 0 1px 0 rgba(69, 52, 88, 0.2), 0 2px 6px -2px rgba(69, 52, 88, 0.28);
  margin: 1rem 1.5rem 0.5rem;
  box-sizing: border-box;
  background-color: ${props => props.theme.defaultColor.white};
  overflow: auto;
  ${({ minWidth }) =>
    minWidth
      ? css`
          min-width: ${minWidth};
        `
      : ''}

/* should just be refactored to take a prop maxHeight */
  ${({ useStylesForDrawerWithHeaderAndFooter, useSylesTwoForDrawer, useStylesForModal }) => {
    if (useStylesForDrawerWithHeaderAndFooter) {
      return css`
        max-height: calc(100vh - 19rem);
      `
    }
    if (useSylesTwoForDrawer) {
      return css`
        max-height: calc(100vh - 20rem);
      `
    }
    if (useStylesForModal) {
      return css`
        max-height: calc(100vh - 30rem);
      `
    }
    return css`
      max-height: calc(100vh - 14rem);
    `
  }}
`
export const TableHeadRow = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  min-height: 3rem;
  padding: 0.5rem;
  border-bottom: 1px solid #dcdee0;
  background: ${props => props.theme.defaultColor.white};
  z-index: 999;
`

export const TableHeaderCell = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  flex: 0 0 auto;
  padding: 0 1rem;
  color: rgb(159, 162, 167);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;

  ${({ rightAlign }) =>
    rightAlign
      ? css`
          justify-content: flex-end;
          padding-right: 2rem;
        `
      : ''}

${({ centerAlign }) =>
  centerAlign
    ? css`
        justify-content: center;
      `
    : ''}

  ${({ flexBasis }) =>
    flexBasis &&
    css`
      flex: 0 0 ${flexBasis};
    `};
  flex-grow: ${({ flexGrow }) => flexGrow || '0'};
`

export const TableBody = styled.div`
  position: sticky;
  top: 0;
  overflow: auto;
`
export const TableRow = styled.div`
  position: relative;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0.5rem;
  ${({ noBorder }) =>
    noBorder
      ? ''
      : css`
          border-bottom: 1px solid rgb(231, 232, 234);
        `}


  background: ${props => props.theme.defaultColor.white};

  ${({ quedForRemoval }) =>
    quedForRemoval
      ? css`
          background: rgb(248, 201, 201);
        `
      : ''};

  ${({ quedForAdd }) =>
    quedForAdd
      ? css`
          background: rgb(200, 253, 208);
        `
      : ''};


  ${({ disabled, theme }) =>
    disabled
      ? css`
          background-color: ${theme.defaultColor.pastel};
        `
      : ''}
`

export const TableCell = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  flex: 0 0 auto;
  flex-grow: ${({ flexGrow }) => flexGrow || '1'};
  flex-basis: 0;
  padding: 0.5rem 1rem;
  text-align: left;
  overflow: hidden;
  z-index: 1;
  color: ${({ theme }) => theme.defaultColor.grape};

  word-wrap: break-word;

  font-size: .9rem;
  line-height: 1.25rem;

  ${({ rightAlign }) =>
    rightAlign
      ? css`
          justify-content: flex-end;
          padding-right: 2rem;
        `
      : ''}
  ${({ centerAlign }) =>
    centerAlign
      ? css`
          justify-content: center;
        `
      : ''}

  ${({ flexBasis }) =>
    flexBasis &&
    css`
      flex: 0 0 ${flexBasis};
    `};
  flex-grow: ${({ flexGrow }) => flexGrow || '0'};

  ${({ capitalize }) =>
    capitalize
      ? css`
          text-transform: capitalize;
        `
      : ''}
`

// Table cell ideas
export const CardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const CardImage = styled.img`
  height: 3rem;
  width: 3rem;
  margin-right: 1rem;
`

export const CardInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${({ right }) =>
    right
      ? css`
          align-items: right;
        `
      : ''}
  ${({ centerAlign }) =>
    centerAlign
      ? css`
          align-items: center;
        `
      : ''}
`
export const CardInfoColumnTitle = styled.div`
  font-size: 0.9rem;
  line-height: 1.25rem;
  word-wrap: break-word;
`
export const CardInfoColumnDesctiption = styled.div`
  font-size: 0.9rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.defaultColor.midPurple};
  word-wrap: break-word;
`

export const TableAction = styled.div`
  color: ${({ theme }) => theme.defaultColor.highlight};
  font-size: 0.875rem;
  text-align: right;
  padding: 0.2rem 0;
  margin: 0.05rem 0;

  width: 100%;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.defaultColor.grape};
  }

  ${({ hideAction }) =>
    hideAction
      ? css`
          display: none;
        `
      : ''}
`

export const NoData = styled.div`
  text-align: center;
  margin: 2rem auto;
  color: ${({ theme }) => theme.defaultColor.grape};
`

export const Chip = styled.span`
  padding: 0.25em 0.625em;
  border-radius: 2em;
  background: ${props => rgba(props.theme.defaultColor.highlight, 0.15)};
  color: ${props => props.theme.defaultColor.highlight};
  font-size: 0.9em;

  ${props =>
    props.color === 'yellow' &&
    css`
      background: ${rgba(props.theme.defaultColor.yellow, 0.15)};
      color: ${props.theme.defaultColor.yellow};
    `};

  ${props =>
    props.color === 'orange' &&
    css`
      background: ${rgba(props.theme.defaultColor.orange, 0.15)};
      color: ${props.theme.defaultColor.orange};
    `};

  ${props =>
    props.color === 'red' &&
    css`
      background: ${rgba(props.theme.defaultColor.errorColor, 0.15)};
      color: ${props.theme.defaultColor.errorColor};
    `};

  ${props =>
    props.color === 'disabled' &&
    css`
      background: ${rgba(props.theme.defaultColor.midPurple, 0.15)};
      color: ${rgba(props.theme.defaultColor.midPurple, 0.5)};
    `};
  ${props =>
    props.color === 'green' &&
    css`
      background: #d9f7ed;
      color: #00ca86;
    `}
`
