import * as ActionTypes from './ActionTypes';

export const Ticket = (state = {
        isLoading: false,
        ticket: [],
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADDTICKET_REQUEST:
            return {...state,
                isLoading: true
            };
        case ActionTypes.ADDTICKET_SUCCESS:
            return {...state,
                isLoading: false,
                ticket: action.ticket,
                errMess: null
            };
        case ActionTypes.ADDTICKET_FAILURE:
            return {
                ticket: [],
                isLoading: false,
                errMess: action.message
            };
        default:
            return state
    }
}