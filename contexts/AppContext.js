import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    return(
        <AppContext.Provider
            value={{
                loading,
                setLoading
            }}
        >
            { children }
        </AppContext.Provider>
    );
};