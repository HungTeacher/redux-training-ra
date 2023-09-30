import React, {useReducer, useRef} from 'react';
import {createStore} from "redux";
import { setJob, addJob, updateJob, deleteJob, setEditJobId} from "../redux/actions/todo";
import { initState} from "../redux/reducers/todo";
import { useSelector, useDispatch} from "react-redux";
/*const jobs = [
    {
        id: 1,
        job: "Clean house"
    },
    {
        id: 2,
        job: "Coding"
    }
]*/


/*
//actions
const setJob = (payload) => {
    return {
        type: "SET_JOB",
        payload
    }
}
let jobId = 0
const addJob = (payload) => {
    return {
        type: "ADD_JOB",
        payload: {
            id: ++jobId,
            text: payload
        }
    }
}
const deleteJob = (payload) => {
    return {
        type: "DELETE_JOB",
        payload
    }
}
const updateJob = (payload) => {
    return {
        type: "UPDATE_JOB",
        payload
    }
}
const setEditJobId = (payload) => {
    return {
        type: "SET_EDIT_JOB_ID",
        payload,
    }
}*/
/*//initState
const initState = {
    jobs: [],
    job: '',
    editJobId: null
}
//reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_JOB":
            return {
                ...state,
                job: action.payload
            }
        case "ADD_JOB":
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case "DELETE_JOB":
            /!* const newJobs = [...state.jobs]
             newJobs.splice(action.payload, 1)*!/
            const newJobs = state.jobs.filter(item => item.id !== action.payload)
            return {
                ...state,
                jobs: newJobs
            }

        case "UPDATE_JOB":
            const updatedJob = state.jobs.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, text: action.payload.text}
                } else {
                    return item
                }
            })
            return {
                ...state,
                jobs: updatedJob,
                editJobId: null
            }
        case "SET_EDIT_JOB_ID":
            return {
                ...state,
                editJobId: action.payload
            }
        default:
            return state
    }
}*/

//Store
/*const store = createStore(reducer)
console.log(store)*/

function TodoApp(props) {
    // const [state, dispatch] = useReducer(reducer, initState)
    // const {jobs, job, editJobId} = state;
    const {jobs, job, editJobId} = useSelector(store => store.todo)
    const dispatch = useDispatch()
    console.log(jobs)
    const nameRef = useRef()
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(""))
        nameRef.current.focus()
    }
    const handleUpdate = (updateText, jobId) => {
        dispatch(updateJob({id: jobId, text: updateText}));
        dispatch(setEditJobId(null)); // Reset editJobId after updating
  /*      nameRef.current.focus();
        dispatch(setJob(""))*/
    }
    const handleInputChange = (e) => {
        dispatch(setJob(e.target.value)); // Update the 'job' property in the state

    };
    return (
        <div>
            <h2>Todo App</h2>

            <input style={{height: "30px"}} ref={nameRef} placeholder="Enter todo name" value={job}
                   onChange={handleInputChange}/>

            <button onClick={handleSubmit}>Add todo</button>

            {
                jobs.map((jobItem) => (
                    <ul>
                        {
                            editJobId === jobItem.id ? (
                                <>
                                    <input value={job} onChange={e => handleInputChange(e)}/>
                                    <button onClick={() => dispatch(deleteJob(jobItem.id))}>Delete</button>
                                    <button onClick={() => handleUpdate(job, jobItem.id)}>Update</button>
                                </>
                            ) : (
                                <>
                                    <li>{jobItem.text}
                                        <button onClick={() => dispatch(deleteJob(jobItem.id))}>Delete</button>
                                        <button onClick={() => dispatch(setEditJobId(jobItem.id))}>Edit</button>
                                    </li>
                                </>
                            )
                        }
                        {/*<li key={job.id}>{job.text}
                            <button onClick={() => dispatch(deleteJob(job.id))}>Delete</button>
                        </li>*/}
                    </ul>
                ))
            }
        </div>
    );
}

export default TodoApp;