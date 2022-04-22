import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'

export const ProtectedRoute = ({children}) => {
    const {user, loading} = useAuth()

    if (loading === true ) {
        return <h1>loading</h1>
      }

    if (!user) {
        return <Navigate to='/login' />
    }

    return <>{children}</>
}
