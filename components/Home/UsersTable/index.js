/* eslint-disable radix */
import React, { useEffect, useState, Fragment } from 'react'
import { Cookies } from 'react-cookie'

import { useIsMount } from '../../../hooks/useIsMount'
import SearchBar from './SearchBar'
import Table from './Table'
import Navigation from './Navigation'
import { FullPageLoader } from '../../UI/index'

const cookies = new Cookies()

const UsersTable = ({ users, total }) => {
  const isMount = useIsMount()

  const [queryState, setQueryState] = useState({
    skip: 0,
    limit: 100,
    sort_column: 'created_at',
    sort_dir: -1,
    q: ''
  })
  const [dataState, setDataState] = useState({
    loading: false,
    data: users,
    totalCount: total
  })
  // pagination state
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)

  const startIndex = page * pageSize
  const endIndex = page * pageSize + pageSize
  const numberOfPages = Math.ceil(dataState.totalCount / pageSize)

  useEffect(() => {
    const getData = async () => {
      setDataState({ ...dataState, loading: true })

      const token = cookies.get('token')
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}users?skip=${queryState.skip}&limit=${queryState.limit}&sort_column=${queryState.sort_column}&sort_dir=${queryState.sort_dir}&q=${queryState.q}`,
          {
            method: 'GET',
            headers: { Authorization: token }
          }
        )

        const data = await response.json()

        // if search term...
        if (queryState.q !== '') {
          if (queryState.skip > 0) {
            return setDataState({
              ...dataState,
              data: [...dataState.data, ...data.users],
              totalCount: data.total
            })
          }
          return setDataState({
            ...dataState,
            data: data.users,
            totalCount: data.total
          })
        }
        return setDataState({
          ...dataState,
          data: [...dataState.data, ...data.users],
          totalCount: data.total,
          loading: false
        })
      } catch (e) {
        console.log('e', e)
      }
    }

    if (isMount) {
      return
    }
    getData()
  }, [queryState])

  const handlePreviousChange = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  const handleNextChange = () => {
    if (dataState.data.length === (page + 1) * pageSize) {
      setQueryState({ ...queryState, skip: queryState.skip + 100 })
    }
    setPage(page + 1)
  }

  const handleSetPageSize = newPageSize => {
    if (
      dataState.data.length < (page + 1) * parseInt(newPageSize) &&
      dataState.data.length < dataState.totalCount
    ) {
      setQueryState({ ...queryState, skip: queryState.skip + 100 })
    }
    setPage(0)
    setPageSize(parseInt(newPageSize))
  }

  const handleSearchDataByTerm = () => {
    setPage(0)
    setQueryState({ ...queryState, q: searchTerm })
  }

  const handleClearSearchTerm = () => {
    setSearchTerm('')
    setPage(0)
    setQueryState({
      skip: 0,
      limit: 100,
      sort_column: 'created_at',
      sort_dir: -1,
      q: ''
    })
  }

  return (
    <Fragment>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearchDataByTerm={handleSearchDataByTerm}
        handleClearSearchTerm={handleClearSearchTerm}
      />
      {dataState.loading ? (
        <FullPageLoader />
      ) : (
        <Fragment>
          <Table valuesToRender={dataState.data.slice(startIndex, endIndex)} />
          <Navigation
            page={page}
            pageSize={pageSize}
            numberOfPages={numberOfPages}
            handlePreviousChange={handlePreviousChange}
            handleNextChange={handleNextChange}
            handleSetPageSize={handleSetPageSize}
            total={dataState.totalCount}
            dataItemName="contacts"
          />
        </Fragment>
      )}
    </Fragment>
  )
}

UsersTable.displayName = 'UsersTable'
export default UsersTable
