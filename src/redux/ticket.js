import * as ActionTypes from './ActionTypes';

export const Ticket = (state = {
        isLoading: false,
        ticket: null,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.BOOKTICKET_REQUEST:
            return {...state,
                isLoading: true
            };
        case ActionTypes.BOOKTICKET_SUCCESS:
            return {...state,
                isLoading: false,
                ticket: action.ticket,
                errMess: ''
            };
        case ActionTypes.BOOKTICKET_FAILURE:
            return {...state,
                isLoading: false,
                errMess: action.message
            };
            case ActionTypes.CANCELTICKET_REQUEST:
            return {...state,
                isLoading: true
            };
            case ActionTypes.CANCELTICKET_SUCCESS:
                return {...state,
                    isLoading: false,
                    ticket: action.ticket,
                    errMess: ''
                };
            case ActionTypes.CANCELTICKET_FAILURE:
                return {...state,
                    isLoading: false,
                    errMess: action.message
                };
        default:
            return state
    }
}