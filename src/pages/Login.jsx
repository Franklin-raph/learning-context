import React, {useContext, useState} from 'react'
import { AuthProvider, AuthContext } from '../contexts/AuthContext';

const Login = () => {
    const { login, error, loading } = useContext(AuthContext)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <div className='w-[400px] mx-auto'>
            <h1 className='mb-2 text-center text-[22px]'>Login Page</h1>
            {error && <p className='text-red-500 text-center'>{error}</p>}
            <div className='text-left w-full'>
                <p>Email</p>
                <input className='border w-full py-[6px] px-2 rounded-[4px]' type="text" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='text-left my-4 w-full'>
                <p>Password</p>
                <input className='border w-full py-[6px] px-2 rounded-[4px]' type="password" onChange={e => setPassword(e.target.value)}/>
            </div>
            {
                loading ?
                <button className='bg-gray-500 text-white py-[10px] w-full px-5 mt-3 rounded-[5px] cursor-not-allowed'>Loading...</button>
                :
                <button className='bg-gray-500 text-white py-[10px] w-full px-5 mt-3 rounded-[5px]' onClick={handleSubmit}>Login</button>
            }
        </div>
    );
}

export default Login