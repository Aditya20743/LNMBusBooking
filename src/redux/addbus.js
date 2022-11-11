import * as ActionTypes from './ActionTypes';
 
export const AddBus = (state = {
        // user: null,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADDBUS_REQUEST:
            return {...state,
                // isLoading: true,
            };
        case ActionTypes.ADDBUS_SUCCESS:
            return {...state,
                errMess: '',
            };
        case ActionTypes.ADDBUS_FAILURE:
            return {...state,
                errMess: action.message
            };
        default:
            return state
    }
}