import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
  const { userId } = useParams();
    return (
    <div>
        <h3>Details about user { userId }</h3>
    </div>
  )
}
