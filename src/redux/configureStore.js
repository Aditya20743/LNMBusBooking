import { createStore, combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Auth } from "./auth";
import { Bus } from "./bus";
import { Store } from './store';
import { Wallet } from "./wallet";
import { Schedule } from "./schedule";
import { Outpass } from "./outpass";
import { Ticket } from "./ticket";


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            bus: Bus,
            outpass: Outpass,
            store: Store,
            ticket: Ticket,
            wallet: Wallet,
            schedule: Schedule
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
