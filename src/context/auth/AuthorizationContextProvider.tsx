import React, { useContext, useState } from 'react';

export interface ContextProps {
    isAuthorized: boolean,
    setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>,
    token: string,
    setToken: React.Dispatch<React.SetStateAction<string>>
}

export const InitialState: ContextProps = {
    isAuthorized: false,
    setIsAuthorized: () => undefined,
    token: '',
    setToken: () => undefined
};

export const AuthorizationContext = React.createContext<ContextProps>(InitialState);

export const AuthorizationContextProvider: React.FC = ({children}) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [token, setToken] = useState('');

    return (
        <AuthorizationContext.Provider
            value={{
                isAuthorized,
                setIsAuthorized,
                token,
                setToken
            }}
        >
            {children}
        </AuthorizationContext.Provider>
    );
};

export const useAuthorizationContext = (): ContextProps => useContext<ContextProps>(AuthorizationContext);


