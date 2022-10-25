import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../../Firebasae/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const Authprovider = ({ children }) => {

    const user = { displayname: "nabil newaz" };
    const authInfo = { user };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;