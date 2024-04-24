import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active'
    return (
    <div>
        <h2>User - 1</h2>
        <h2>User - 2</h2>
        <h2>User - 3</h2>
        <Outlet />
        <div>
            <button onClick={ () => setSearchParams({ filter: 'active' }) }>Active Users</button>
            <button onClick={ () => setSearchParams({}) }>Reset Filter</button>
            { showActiveUsers ?  <h3>All Active Users</h3> : <h3>All Users</h3> }
        </div>
    </div>
  )
}
