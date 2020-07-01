/* eslint-disable radix */
import React, { useEffect, useState, Fragment } from 'react'

import { useIsMount } from '../../../hooks/useIsMount'
import SearchBar from './SearchBar'
import Table from './Table'
import Navigation from './Navigation'

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
      try {
        const response = await api.shared.getEmailRecipients({
          ...queryState,
          id: match.params._id
        })
        // if search term...
        if (queryState.q !== '') {
          if (queryState.skip > 0) {
            return setDataState({
              ...dataState,
              data: [...dataState.data, ...response.data.data.EmailTrack],
              totalCount: response.data.data.total_count
            })
          }
          return setDataState({
            ...dataState,
            data: response.data.data.EmailTrack,
            totalCount: response.data.data.total_count
          })
        }
        return setDataState({
          ...dataState,
          data: [...dataState.data, ...response.data.data.EmailTrack],
          totalCount: response.data.data.total_count,
          loading: false
        })
      } catch (e) {
        console.log('e', e)
        // NotificationError({
        //   message: 'An error occured for getting email recipients list',
        //   duration: 5000
        // })
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
      sort_column: '',
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
  )
}

UsersTable.displayName = 'UsersTable'
export default UsersTable
