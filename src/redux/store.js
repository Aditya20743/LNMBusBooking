import * as ActionTypes from './ActionTypes';

export const Store = (state = {
        isLoading: false,
        store: null,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.STORE_REQUEST:
            return {...state,
                isLoading: true,
            
            };
        case ActionTypes.STORE_SUCCESS:
            return {...state,
                isLoading: false,
                store: action.store,
                errMess: null
            };
        case ActionTypes.STORE_FAILURE:
            return {
                store: null,
                isLoading: false,
                errMess: action.message
            };
        default:
            return state
    }
}
