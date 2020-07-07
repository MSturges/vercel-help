import React, { useState } from 'react'
import styled from 'styled-components'
import qs from 'qs'
import { Cookies } from 'react-cookie'

import {
  CardImage,
  CardInfoColumn,
  CardInfoColumnDesctiption,
  CardInfoColumnTitle,
  CardWrapper,
  Chip,
  TableCell,
  TableRow,
  Button
} from '../../UI/index'

const cookies = new Cookies()

const TableRowComponent = ({ item, noBorder }) => {
  const [loading, setLoading] = useState(false)

  const loginAsUser = async user => {
    setLoading(true)
    const token = cookies.get('token')

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { Authorization: token },
        body: qs.stringify({ id: user._id })
      })

      const responseData = await response.json()

      localStorage.setItem('admin_token_yo', responseData.token)

      const encodedCode = encodeURIComponent(responseData.token)


      window.open(`${process.env.NEXT_PUBLIC_PLATFORM_URL}/admin?=${encodedCode}`, '_blank')

      setLoading(false)
    } catch (e) {
      setLoading(false)

      console.log('e', e)
    }
  }

  return (
    <TableRow className="table-row" noBorder={noBorder}>
      <TableCell flexBasis="16rem" flexGrow="1" fitted="16rem">
        <CardWrapper>
          <CardImage
            src={
              item.profile_image
                ? process.env.NEXT_PUBLIC_CDN_URL + item.profile_image
                : '/MA_default-avatar.png'
            }
            alt={item.profile_image}
          />
          <CardInfoColumn>
            <CardInfoColumnTitle>{item.name}</CardInfoColumnTitle>
            <CardInfoColumnDesctiption>{item.email}</CardInfoColumnDesctiption>
          </CardInfoColumn>
        </CardWrapper>
      </TableCell>

      <TableCell flexBasis="16rem" capitalize>
        {item.company_id.name}
      </TableCell>
      <TableCell flexBasis="8rem" capitalize>
        {item.role}
      </TableCell>
      <TableCell flexBasis="8rem" capitalize>
        {item.status === 'active' ? (
          <Chip color="green">Active</Chip>
        ) : item.status === 'pending' ? (
          <Chip color="orange">Pending</Chip>
        ) : (
          <Chip color="red">Inactive</Chip>
        )}
        {item.status === 'Active'}
      </TableCell>

      <TableCell flexBasis="8em" rightAlign>
        <CardInfoColumn right>
          <Wrapper>
            <Button onClick={() => loginAsUser(item)} label="Login As" loading={loading} />
          </Wrapper>
        </CardInfoColumn>
      </TableCell>
    </TableRow>
  )
}

const Wrapper = styled.div`
  height: 3rem;
`

export default TableRowComponent
