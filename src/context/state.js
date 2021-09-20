import {createContext, useContext, useRef} from 'react';

const AppContext = createContext(null);

export function AppWrapper({children}) {
    let bgBoxRef = useRef(null)
    let hiRef = useRef(null)
    let cursorRef = useRef(null)
    let wordsRef = useRef(null)
    const words = [' Manny', ' a Developer', ' a Creative', ' a Veteran', ' Manny']

    let sharedState = {
        bgBoxRef,
        hiRef,
        cursorRef,
        wordsRef,
        words,
    }

    return (
        <AppContext.Provider value={sharedState}>
        {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}