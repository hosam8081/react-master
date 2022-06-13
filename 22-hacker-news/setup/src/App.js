import React, { useEffect } from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'
import { useSelector, useDispatch } from 'react-redux'
import {getFetchNews } from './newSlice';

function App() {
  const {query, page} = useSelector(state => state.new)
  useEffect(() => {
    dispatch(getFetchNews())
  }, [query, page])
  const dispatch = useDispatch()

  return <>
    <SearchForm />
    <Buttons />
    <Stories />
  </>
}

export default App
