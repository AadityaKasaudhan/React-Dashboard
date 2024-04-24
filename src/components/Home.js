import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
  return (
    <>
    <h1>Home</h1>
    <button onClick={ () => navigate('order-summary')}>Buy Now</button>
    </>
  )
}
