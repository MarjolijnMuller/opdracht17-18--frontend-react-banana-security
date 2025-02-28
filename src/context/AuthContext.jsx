import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
    });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token && isTokenValid(token)) {
            //log de gebruiker opnieuw in
            void login(token)
        } else {
            setAuth({
                isAuth: false,
                user: null,
                status: 'done'
            });
        }
    }, [])

    async function login(token) {
        localStorage.setItem('token', token);

        const decodedToken = jwtDecode(token);
        console.log(decodedToken.sub);
        console.log("Gebruiker is ingelogd");
        toggleIsAuth({
            isAuth: true,
            user: {
                usernam: response.data.username,
                email: response.data.email,
                id: response.data.id,
                role: 'user'
            },
        });
        navigate('/profile');
    };

    function logout() {
        console.log("Gebruiker is uitgelogd");
        toggleIsAuth({
            isAuth: false,
            user: null,
        });
        navigate('/');
    }

    const contextData = {
        isAuth: isAuth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;