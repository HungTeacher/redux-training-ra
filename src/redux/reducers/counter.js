//reducer
export const initState = {
    count: 0
}
export default function counter(state = initState, action) {
    switch (action.type) {
        case "INCREASE":
            return {...state, count: state.count + 1}
        case "DECREASE":
            return {...state, count: state.count - 1}
        default:
            return state;
    }
}