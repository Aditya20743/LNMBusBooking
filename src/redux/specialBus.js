import * as ActionTypes from './ActionTypes';

export const specilBusRequest = (state = {
    isLoading: false,
    specilBusRequest: [],
    errMess: null
}, action) => {
    switch (action.type) {
        case ActionTypes.SPECIALBUS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case ActionTypes.SPECIALBUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                specilBusRequest: action.specilBusRequest,
                errMess: ''
            };
        case ActionTypes.SPECIALBUS_FAILURE:
            return {
                ...state,
                isLoading: false,
                errMess: action.message
            };
        default:
            return state
    }
}