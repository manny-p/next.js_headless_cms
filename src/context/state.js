import {createContext, useRef} from 'react'

export const AppContext = createContext(null)

export const AppProvider = ({children}) => {

  const blobRef1 = useRef(null)
  const blobRef2 = useRef(null)
  const bgBoxRef = useRef(null)
  const hiRef = useRef(null)
  const cursorRef = useRef(null)
  const wordsRef = useRef(null)
  const words = [' Manny', ' a Developer', ' a Creative', ' a Veteran', ' Manny']

  const state = {
    blobRef1,
    blobRef2,
    bgBoxRef,
    hiRef,
    cursorRef,
    wordsRef,
    words,
  }

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}

