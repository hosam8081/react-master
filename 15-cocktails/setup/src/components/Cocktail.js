import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id, img, head, category, glass}) => {
  return (
    <article className="cocktail">
        <div className="img-container">
          <img
            src={img}
            alt={head}
          />
        </div>
        <div className="cocktail-footer">
          <h3>{head}</h3>
          <h4>{glass}</h4>
          <p>{category}</p>
          <a className="btn btn-primary btn-details" href="/cocktail/17222">
            details
          </a>
        </div>
      </article>
  )
}

export default Cocktail
