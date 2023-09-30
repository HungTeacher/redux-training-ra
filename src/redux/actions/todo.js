//actions
export const setJob = (payload) => {
    return {
        type: "SET_JOB",
        payload
    }
}
let jobId = 0
export const addJob = (payload) => {
    return {
        type: "ADD_JOB",
        payload: {
            id: ++jobId,
            text: payload
        }
    }
}
export const deleteJob = (payload) => {
    return {
        type: "DELETE_JOB",
        payload
    }
}
export const updateJob = (payload) => {
    return {
        type: "UPDATE_JOB",
        payload
    }
}
export const setEditJobId = (payload) => {
    return {
        type: "SET_EDIT_JOB_ID",
        payload,
    }
}