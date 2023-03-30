import React, { useContext, useReducer, useEffect } from "react"
import data from "../data"
import reducer from "../reducer/reducer"

const AppContext = React.createContext()

const initialState = {
    cart: data,
    total: 0,
    amount: 0,
}
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const toggleAmount = (id, type) => {
        dispatch({ type: 'TOGGLE-AMOUNT', payload: { id, type } })
    }
    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
    }
    useEffect(() => {
        dispatch({ type: 'TOTALS' })
    }, [state.cart])
    return (
        <AppContext.Provider
            value={{
                ...state,
                toggleAmount,
                removeItem
            }}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }