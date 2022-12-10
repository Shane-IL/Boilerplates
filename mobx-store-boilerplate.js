import { useLocalObservable } from 'mobx-react';
import React, { createContext, useContext } from 'react';

//Store factory function
const createDataStore = () => {
    return {
        data: null,
        fetching: false,
        addData: function (newData) {
            this.data = newData
        },
        toggleFetching: function (newValue: boolean) {
            this.fetching = newValue;
        },
        get currentData() {
            return this.data
        },
        get isFetching() {
            return this.fetching
        }
    }
}

//Context
export const StoreContext = createContex(null);

//Context Provider
export const StoreProvider = ({ children }) => {
    const dataStore = useLocalObservable(createDataStore)
    return (
        <StoreContext.Provider value={dataStore}>{children}</StoreContext.Provider>
    );
}

//Context consumer hook
export const useDataStore = () => {
    const dataStore = useContext(StoreContext)
    if (!dataStore) {
        throw new Error('useDataStore must be used within a StoreProvider.')
    }
    return dataStore
}

