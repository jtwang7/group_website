const defaultState = {
    isActive:false,
    timer:-1,
    id:-1,

    pgoneClassNames:{
        img: "hidden",
        title: "hidden",
        text: "hidden",
    },
}

export default (state=defaultState,action) => {
    if(action.type === "open_isActive_delay") {
        let newState = JSON.parse(JSON.stringify(state))
        newState.isActive = true
        newState.id = action.id
        clearTimeout(newState.timer)
        return newState
    }
    if(action.type === "close_isActive_delay") {
        let newState = JSON.parse(JSON.stringify(state))
        newState.isActive = false
        return newState
    }
    if(action.type === "add_timer") {
        let newState = JSON.parse(JSON.stringify(state))
        newState.timer = action.timer
        return newState
    }
    if(action.type === "open_isActive") {
        let newState = JSON.parse(JSON.stringify(state))
        newState.isActive = true
        // console.log(newState)
        clearTimeout(newState.timer)
        return newState
    }
    if(action.type === "handle_scroll") {
        let newState = JSON.parse(JSON.stringify(state))
        newState.pgoneClassNames.img = "item_column"
        newState.pgoneClassNames.title = "item_row"
        newState.pgoneClassNames.text = "item_delay_row"
        return newState
    }
    if(action.type === "handle_noscroll") {
        let newState = JSON.parse(JSON.stringify(state))
        newState.pgoneClassNames.img = "remove_item"
        newState.pgoneClassNames.title = "remove_item"
        newState.pgoneClassNames.text = "remove_item"
        return newState
    }

    return state
}