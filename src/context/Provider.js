import React, { createContext, useState } from "react"

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {

    const [content, setContent] = useState([])
    const [categories, setCategories] = useState([])

    return (<GlobalContext.Provider value={{content, setContent, categories, setCategories}}>{children}</GlobalContext.Provider>)
}