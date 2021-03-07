const RouterReducer = (state = "Home", action) => {
    if (action.type === "CHANGE_ROUTE") {
        return action.payload
    } else {
        return state
    }
}

export default RouterReducer