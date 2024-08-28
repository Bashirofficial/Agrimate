import React, { createContext, useState, useEffect } from 'react'


export const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(() => {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    })

    

    const login = (userData) => {
      localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      };
    
      const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setUser(null);
      };

    return(
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    )
};


 