//initState
export const initState = {
    jobs: [],
    job: '',
    editJobId: null
}
//reducer
export default function todo (state = initState, action) {
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
            /* const newJobs = [...state.jobs]
             newJobs.splice(action.payload, 1)*/
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
}