import * as ActionTypes from './ActionTypes';

export const Bus = (state = {
    isLoading: false,
    bus: null,
    errMess: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADDBUS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case ActionTypes.ADDBUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                bus: action.bus,
                errMess: ''
            };
        case ActionTypes.ADDBUS_FAILURE:
            return {
                ...state,
                isLoading: false,
                errMess: action.message
            };
        case ActionTypes.REMOVEBUS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case ActionTypes.REMOVEBUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                bus: action.bus,
                errMess: ''
            };
        case ActionTypes.REMOVEBUS_FAILURE:
            return {
                ...state,
                isLoading: false,
                errMess: action.message
            };
        default:
            return state
    }
}