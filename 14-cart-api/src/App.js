import React, { useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux';
import {getCartItem, totalPrice } from './cartSlice';
// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  const {cartItem} = useSelector(state => state.cart)
const dispatch = useDispatch();

useEffect(() => {
  dispatch(totalPrice())
}, [cartItem])

useEffect(() => {
  dispatch(getCartItem())
}, [])
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
