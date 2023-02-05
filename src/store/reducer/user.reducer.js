import { userTypes } from '../action/user.action';



let iniState = {
    isLoading: false,
    data: [],
    error: ""
}



function userReducer(state = iniState, action) {
    switch (action.type) {
        case userTypes.loadData:
            return { ...state, isLoading: true };

        case userTypes.loadSuccess:
            return { ...state, data: action.payload, isLoading: false, error: "" };

        case userTypes.loadError:
            return { ...state, isLoading: false, error: "Loading Error" };
        default:
            return state;
    }
}

export default userReducer