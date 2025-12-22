import { createContext, useContext } from "react";

const AuthContext = createContext({
    loggedInUser: null

})


export const AuthProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (<>
        <AuthContext.Provider value={{
            loggedInUser: null
        }}>
            {children}
        </AuthContext.Provider>
    </>)
}

export const useAuth = () => {
    const {
        loggedInUser
    } = useContext(AuthContext);
    return { loggedInUser }
};