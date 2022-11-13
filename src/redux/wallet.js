import * as ActionTypes from './ActionTypes';

export const Wallet = (state = {
        isLoading: false,
        wallet: null,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.WALLET_REQUEST:
            return {...state,
                isLoading: true,
            
            };
        case ActionTypes.WALLET_SUCCESS:
            return {...state,
                isLoading: false,
                wallet: action.wallet,
                errMess: ''
            };
        case ActionTypes.WALLET_FAILURE:
            return {...state,
                isLoading: false,
                errMess: action.message
            };
        default:
            return state
    }
}
