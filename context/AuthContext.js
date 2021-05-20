import { createContext, useState } from 'react'
import { Router, useRouter } from 'next/router'
import { route } from 'next/dist/next-server/server/router';

const AuthContext = createContext();

export function AuthProvider(props) {
    const [user, setUser] = useState(null);
    
    // Adds email to the user
    const loginUser = async (email) => {
        setUser({email});
    }

    // Sets user to null
    const logoutUser = async (email) => {
        setUser(null);
        Router.push('/')
    }
    
    return (
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;
