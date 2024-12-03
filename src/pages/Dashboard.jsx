import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const { logInUser, logout } = useContext(AuthContext)
    const navigate = useNavigate()

  return (
    <>
        <div className='flex items-center justify-center mt-5 gap-4'>
            {logInUser?.email ? <p>{logInUser?.email}</p> : <p>{localStorage.getItem('userEmail')}</p> } Dashboard
        </div>
        <button className='bg-green-500 text-white py-[10px] w-[50%] mx-auto block px-5 mt-3 rounded-[5px]' onClick={() => navigate('/products')}>Products</button>
        <button onClick={logout} className='bg-gray-500 text-white py-[10px] w-[50%] mx-auto block px-5 mt-3 rounded-[5px]'>Logout</button>
    </>
  )
}

export default Dashboard