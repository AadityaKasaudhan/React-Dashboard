import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    
    const handleLogOut = () => {
        auth.logout()
        navigate('/')
    }
    return (
    <div>
        { 
        auth.user ? <><h4>Welcome {auth.user}</h4><button onClick={handleLogOut}>Log out</button></> : <> <h4 style={{color: '#F75D59   '}}>You should be Login first</h4> </>}
    </div>
  )
}
