import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useLocation, useNavigate } from 'react-router-dom'

export const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirect = location.state?.path || '/'
    
    const handleSubmit = () => {
        auth.login(user)
        navigate(redirect, {replace: true})
    }
    return (
    <div>
        <label>
            Username:{''} <input type="text" onChange={ (e) => setUser( e.target.value )}/>
        </label>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}
