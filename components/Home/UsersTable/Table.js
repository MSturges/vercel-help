import React, { useState } from 'react'
import styled from 'styled-components'

import { TableWrapper, TableHeadRow, TableHeaderCell, TableBody, NoData } from '../../UI/index'

import TableRow from './TableRow'

const Table = ({ valuesToRender }) => {
  return (
    <TableWrapper minWidth="1000px">
      <TableHeadRow top>
        <TableHeaderCell flexBasis="16rem" flexGrow="1">
          User
        </TableHeaderCell>
        <TableHeaderCell flexBasis="16rem">Company</TableHeaderCell>
        <TableHeaderCell flexBasis="8rem">Role</TableHeaderCell>
        <TableHeaderCell flexBasis="8rem">Status</TableHeaderCell>
        <TableHeaderCell flexBasis="8rem" rightAlign>
          Actions
        </TableHeaderCell>
      </TableHeadRow>
      <TableBody>
        {valuesToRender.map((item, index) => {
          return <TableRow item={item} noBorder={valuesToRender.length === index + 1} key={item._id} />
        })}
        {valuesToRender.length <= 0 ? <NoData>No Teams Members</NoData> : ''}
      </TableBody>
    </TableWrapper>
  )
}

Table.displayName = 'EmailRecipientsTable'
export default Table
