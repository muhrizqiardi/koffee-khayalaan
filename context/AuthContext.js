import { createContext, useEffect, useState } from 'react'
import { Router, useRouter } from 'next/router'
import { Magic } from 'magic-sdk'
import { MAGIC_PUBLIC_KEY } from '../utils/urls'

const AuthContext = createContext();

let magic;

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const Router = useRouter();

    // Adds email to the user
    const loginUser = async (email) => {
        try {
            await magic.auth.loginWithMagicLink({ email });
            setUser({ email });
            Router.push('/account')
        } catch (error) {
            setUser(null);
            Router.push('/')
        }
    }

    // Sets user to null
    const logoutUser = async (email) => {
        try {
            await magic.user.logout();
            setUser(null);
            Router.push('/')
        } catch (error) { }
    }

    const checkUserLoggedIn = async () => {
        try {
            const isLoggedIn = await magic.user.isLoggedIn();
            if (isLoggedIn) {
                const { email } = await magic.user.getMetadata();
                setUser({email});

                // Test
                const token = await getToken()
                console.log("checkUserLoggedIn token ", token)
            }
        } catch (error) {

        }
    }

    // Retrieve the Magic Issues Bearer Token
    // Allows users to make authenticated requests
    const getToken = async () => {
        try {
            const token = await magic.user.getIdToken();
            return token;
        } catch (error) {
            
        }
    }

    useEffect(() => {
        magic = new Magic(MAGIC_PUBLIC_KEY);
        checkUserLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ user, getToken, loginUser, logoutUser }}>
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthContext;
