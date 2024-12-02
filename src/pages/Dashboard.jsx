import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const Dashboard = () => {
    const { logInUser } = useContext(AuthContext)

  return (
    <div>
        {logInUser?.email} Dashboard
    </div>
  )
}

export default Dashboard