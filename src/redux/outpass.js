import * as ActionTypes from './ActionTypes';

export const outpass = (state = {
        isLoading: false,
        outpass: null,
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
                errMess: '',                
            };
        case ActionTypes.OUTPASS_FAILURE:
            return {...state,
                isLoading: false,
                errMess: action.message
            };
        default:
            return state
    }
}
