import * as ActionTypes from './ActionTypes';

export const Bus = (state = {
    isLoading: false,
    bus: [],
    errMess: null
}, action) => {
    switch (action.type) {
        case ActionTypes.BUS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case ActionTypes.BUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                bus: action.bus,
                errMess: ''
            };
        case ActionTypes.BUS_FAILURE:
            return {
                ...state,
                isLoading: false,
                errMess: action.message
            };
        default:
            return state
    }
}