import * as ActionTypes from './ActionTypes';

export const Schedule = (state = {
        isLoading: false,
        schedule: null,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.SCHEDULE_REQUEST:
            return {...state,
                isLoading: true,
            
            };
        case ActionTypes.SCHEDULE_SUCCESS:
            return {...state,
                isLoading: false,
                schedule: action.schedule,
                errMess: ''
            };
        case ActionTypes.SCHEDULE_FAILURE:
            return {...state,
                isLoading: false,
                errMess: action.message
            };
        default:
            return state
    }
}