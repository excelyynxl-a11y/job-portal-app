import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ requiredRole }) => {
  return (
    // implementation later
    <Outlet />
  )
}

export default ProtectedRoute