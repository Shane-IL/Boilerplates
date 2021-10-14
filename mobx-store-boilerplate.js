import React, { createContext } from 'react';
import {useLocalStore} from 'mobx-react';

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    const store = useLocalStore(() => ({
        things: ["thing1"],
        addThing: thing => store.things.push(thing),
        get thingsCount() {
            return store.things.length;
        }
    }));

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
}