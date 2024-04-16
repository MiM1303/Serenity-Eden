import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config"
import PropTypes from 'prop-types';
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const authInfo = {
        user,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

        // <AuthContext.Provider value={authInfo}>
        //     {children}
        // </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.array
}