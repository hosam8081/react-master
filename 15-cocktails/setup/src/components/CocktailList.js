import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktail, loading} = useGlobalContext()
  if (loading) {
    return <Loading />
  }
  if (cocktail.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className="section">
    <h2 className="section-title">Cocktail</h2>
    <div className="cocktails-center">
      {cocktail.map(item => <Cocktail key={item.id} {...item}/>)}
    </div>
  </section>
  )
}

export default CocktailList
