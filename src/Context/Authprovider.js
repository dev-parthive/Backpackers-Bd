import React, {  createContext } from 'react';
export const AuthContext = createContext()
const Authprovider = ({children}) => {
    const name = "parthive";
    const user = {email:"parthive@email.com"}
    const authInfo = {name, user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;