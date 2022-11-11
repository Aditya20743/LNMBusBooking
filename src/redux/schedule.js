import * as ActionTypes from './ActionTypes';

export const UpdateSchedule = (state = {
        isLoading: false,
        updateschedule: null,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.UPDATESCHEDULE_REQUEST:
            return {...state,
                isLoading: true,
            
            };
        case ActionTypes.UPDATESCHEDULE_SUCCESS:
            return {...state,
                isLoading: false,
                updateschedule: action.updateschedule,
                errMess: ''
            };
        case ActionTypes.UPDATESCHEDULE_FAILURE:
            return {...state,
                isLoading: false,
                errMess: action.message
            };
        default:
            return state
    }
}