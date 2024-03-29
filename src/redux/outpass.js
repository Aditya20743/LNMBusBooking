import * as ActionTypes from './ActionTypes';

export const Outpass = (state = {
        isLoading: false,
        outpass: [],
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.OUTPASS_REQUEST:
            return {...state,
                isLoading: true,
            };
        case ActionTypes.OUTPASS_SUCCESS:
            return {...state,
                isLoading: false,
                outpass: action.outpass,
                errMess: null                
            };
        case ActionTypes.OUTPASS_FAILURE:
            return {
                outpass: [],
                isLoading: false,
                errMess: action.message
            };
        default:
            return state
    }
}
