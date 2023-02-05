import axios from 'axios';

export const userTypes = {
    // all: "AllUser",
    // byID: "GetByID",
    loadData: "fetching",
    loadSuccess: "fetchSuccess",
    loadError: "fetchError"
}

export function loadUser() {
    return { type: userTypes.loadData }
}


export function loadSuccess(data) {
    return { type: userTypes.loadSuccess, payload: data }
}


export function loadError() {
    return { type: userTypes.loadError }
}


export function getUser() {
    return dispatch => {
        dispatch(loadUser())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                console.log({ response });
                dispatch(loadSuccess(response.data))

            })
            .catch(function (error) {
                // handle error
                console.log({ error });
                dispatch(loadError())
            });
    };
}


