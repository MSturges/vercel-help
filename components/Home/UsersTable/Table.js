import React from 'react'
import styled from 'styled-components'

import {
  TableWrapper,
  TableHeadRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  NoData,
  CardImage,
  CardInfoColumn,
  CardInfoColumnDesctiption,
  CardInfoColumnTitle,
  CardWrapper,
  Chip,
  TableCell,
  Button,
  // NotificationError,
  // NotificationSuccess
} from '../../UI/index'

const Table = ({ valuesToRender }) => {

  const actionItems = ['Edit']
  if (item.role !== 'owner') {
    actionItems.push('Remove')
  }

  const handleActionChange = (action, item) => {
    if (action === 'Edit') {
      // handleOpenViewUserDrawer(item._id)
    }
  }
  return (
    <TableWrapper minWidth="100px" useSylesTwoForDrawer>
      <TableWrapper minWidth="1000px">
        <TableHeadRow top>
          <TableHeaderCell flexBasis="16rem" flexGrow="1">
            User
          </TableHeaderCell>
          <TableHeaderCell flexBasis="16rem" flexGrow="1">
            Teams
          </TableHeaderCell>
          <TableHeaderCell flexBasis="8rem">Role</TableHeaderCell>
          <TableHeaderCell flexBasis="8rem" rightAlign>
            Actions
          </TableHeaderCell>
        </TableHeadRow>
        <TableBody>
          {valuesToRender.map((item, index) => (
            <TableRow className="table-row" noBorder={valuesToRender.length === index + 1}>
              <TableCell flexBasis="16rem" flexGrow="1" fitted="16rem">
                <CardWrapper>
                  <CardImage
                    src={
                      item.profile_image
                        ? CDN_URL + item.profile_image
                        : '/assets/img/MA_default-avatar.png'
                    }
                    alt={item.profile_image}
                  />
                  <CardInfoColumn>
                    <CardInfoColumnTitle>{item.name}</CardInfoColumnTitle>
                    <CardInfoColumnDesctiption>{item.email}</CardInfoColumnDesctiption>
                  </CardInfoColumn>
                </CardWrapper>
              </TableCell>
              <TableCell flexBasis="16rem" flexGrow="1">
                {item.teams.map((team, i) => {
                  if (item.teams.length <= 1) {
                    return team.name
                  }
                  if (item.teams.length === i + 1) {
                    return team.name
                  }
                  return `${team.name}, `
                })}
              </TableCell>
              <TableCell flexBasis="8rem" capitalize>
                {item.role}
              </TableCell>
        
              <TableCell flexBasis="8rem" rightAlign>
                <CardInfoColumn right>
                  <Wrapper>
                    actions
                  </Wrapper>
                </CardInfoColumn>
              </TableCell>
            </TableRow>
          ))}
          {valuesToRender.length <= 0 ? <NoData>No Teams Members</NoData> : ''}
        </TableBody>
      </TableWrapper>
    </TableWrapper>
  )
}

const StyledSpan = styled.span`
  height: 0.75rem;
  padding-top: 2px;
`

const Wrapper = styled.div`
  height: 3rem;
`

const Actions = styled.div`
  /* padding: 2rem; */
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  border-radius: 50%;
  font-size: 2em;
  color: ${props => props.theme.defaultColor.midPurple};
  transition: all 0.15s linear;
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${props => rgba(props.theme.defaultColor.midPurple, 0.15)};
    color: ${props => props.theme.defaultColor.darkPurple};
  }

  svg {
    outline: none;
  }
`

Table.displayName = 'EmailRecipientsTable'
export default Table
