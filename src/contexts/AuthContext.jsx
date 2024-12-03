import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const [logInUser, setLogInUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (email, password) => {
        try {
            if(!email || !password) {
                setError('Email and password are required');
                setTimeout(() => {
                    setError(null)
                }, 5000)
                return
            }
          // Make a POST request to the login endpoint
          setLoading(true)
          const response = await fetch(`${apiUrl}/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
    
          const data = await response.json();
          console.log(data);
          

          if(response) setLoading(false)
    
          if (!response.ok) {
            setError(data.message || 'Login failed');
            setTimeout(() => {
                setError(null)
            }, 5000)
            return
          }
    
          // Set user information on successful login
          setLogInUser({ email: data.data.email });
          setError(null);
    
          // Optionally, store the token in localStorage for persistence
          localStorage.setItem('userToken', data.data.access_token);
          localStorage.setItem('userEmail', data.data.email);
          navigate('/dashboard')
        } catch (err) {
          setError(err.message);
          setLogInUser(null);
          setTimeout(() => {
            setError(null)
          }, 5000)
          return
        }
      };

      const logout = () => {
        console.log("Log out user...");
        
        setLogInUser(null);
        setError(null);
        localStorage.removeItem('userToken');
        localStorage.removeItem('userEmail');
        navigate('/login')
      };

    return (
        <AuthContext.Provider value={{logInUser, login, error, logout, loading}}>
            {children}
        </AuthContext.Provider>
    )
}