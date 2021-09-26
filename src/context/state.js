import {createContext, useContext, useRef} from 'react';

export const AppContext = createContext(null);

export function AppWrapper({children}) {

    let blobRef1 = useRef(null)
    let blobRef2 = useRef(null)
    let bgBoxRef = useRef(null)
    let hiRef = useRef(null)
    let cursorRef = useRef(null)
    let wordsRef = useRef(null)
    const words = [' Manny', ' a Developer', ' a Creative', ' a Veteran', ' Manny']

    let sharedState = {
        blobRef1,
        blobRef2,
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

