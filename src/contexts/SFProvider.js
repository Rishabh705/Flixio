import React, { createContext, useReducer, useContext } from "react";
import reducer, { initialState } from "./reducer";

// Data layer
export const SFStateContext = createContext();

// Provider
export const SFStateProvider = (props) => {
    return (
        <SFStateContext.Provider value={useReducer(reducer, initialState)}>
            {props.children}
        </SFStateContext.Provider>
    )
}

// this is used inside the components
export const useSFStateValue = () => useContext(SFStateContext);