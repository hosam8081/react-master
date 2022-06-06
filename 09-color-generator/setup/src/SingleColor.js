import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, type, weight, hexColor}) => {
  const  bg = rgb.join(",");
  console.log(hexColor)
  return (
  <article style={{background: `rgb(${bg})`}}>
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'></p>
  </article>)
}

export default SingleColor
