const reducer = (state, action) => {
    if (action.type === 'TOGGLE-AMOUNT') {
        let changeCart = state.cart.map((item) => {
            if (item.id === action.payload.id) {
                if (action.payload.type === 'increase') {
                    return { ...item, amount: item.amount + 1 }
                }
                if (action.payload.type === 'decrease') {
                    return { ...item, amount: item.amount - 1 }
                }
            }
            return item
        })
            .filter((item) => item.amount !== 0)
        return { ...state, cart: changeCart }
    }
    if (action.type === 'REMOVE_ITEM') {
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload)
        }
    }
    if (action.type === 'TOTALS') {
        let { total, amount } = state.cart.reduce((acc, item) => {
            const { price, amount } = item
            const cartTotal = price * amount
            acc.total += cartTotal
            acc.amount += amount
            return acc
        }, {
            total: 0,
            amount: 0,
        }
        )
        total = parseFloat(total.toFixed(2))
        return { ...state, total, amount }
    }

}
export default reducer