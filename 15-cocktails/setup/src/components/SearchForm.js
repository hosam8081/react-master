import React, {useState} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setQuery} = useGlobalContext()
  return (
    <section className="section search">
    <form className="search-form">
      <div className="form-control">
        <label htmlFor="name">Search Your Favorite Cocktail</label>
        <input
          type="text"
          placeholder="search with name"
          name="name"
          id="name"
         
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  </section>
  )
}

export default SearchForm
