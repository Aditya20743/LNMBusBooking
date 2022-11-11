import * as ActionTypes from './ActionTypes';

export const ticket = (state = {
        isLoading: false,
        ticket: null,
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
                errMess: ''
            };
        case ActionTypes.ADDTICKET_FAILURE:
            return {...state,
                isLoading: false,
                errMess: action.message
            };
        default:
            return state
    }
}