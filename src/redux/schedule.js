import * as ActionTypes from './ActionTypes';

export const updateSchedule = (state = {
        isLoading: false,
        schedule: null,
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
                schedule: action.schedule,
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