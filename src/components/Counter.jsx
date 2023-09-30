import React, {useReducer} from 'react';
import { increase, decrease} from "../redux/actions/counter";
// import  counterReducer from "../redux/reducers/counter";
import {initState} from "../redux/reducers/counter";
import {useDispatch, useSelector} from "react-redux";
/*
//actions
function increase (payload) {
    return {
        type: "INCREASE",
        payload
    }
}
function decrease (payload) {
    return {
        type: "DECREASE",
        payload
    }
}*/

/*
//reducer
const initState = {
    count: 0
}
function reducer(state = initState, action) {
    switch (action.type) {
        case "INCREASE":
            return {...state, count: state.count + 1}
        case "DECREASE":
            return {...state, count: state.count - 1}
        default:
            return state;
    }
}*/

function Counter(props) {
    // const [state, dispatch] = useReducer(reducer, initState)
    const {count} = useSelector(store => store.counter)
    const dispatch = useDispatch()
    console.log(count)
    return (
        <div>
            <h3>Counter App</h3>
            <p>{count}</p>
            <button onClick={() => dispatch(increase())}>+</button>
            <button onClick={() => dispatch(decrease())}>-</button>
        </div>
    );
}

export default Counter;