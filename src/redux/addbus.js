import * as ActionTypes from './ActionTypes';
 
// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export const AddBus = (state = {
        isLoading: false,
        user: null,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADDBUS_REQUEST:
            return {...state,
                isLoading: true,
            };
        case ActionTypes.ADDBUS:
            return {...state,
                isLoading: false,
                errMess: '',
                user: action.user
            };
        case ActionTypes.ADDBUS_FAILURE:
            return {...state,
                isLoading: false,
                errMess: action.message
            };
        default:
            return state
    }
}