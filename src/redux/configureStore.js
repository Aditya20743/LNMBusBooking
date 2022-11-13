import { createStore, combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Auth } from "./auth";
import { Bus } from "./bus";
import { updateSchedule } from "./schedule";
import { Store } from './store';
import { Wallet } from "./wallet";
import { Outpass } from "./outpass";
import { Ticket } from "./ticket";
import { Store } from "./store";
import { Wallet } from "./wallet";
import {specilBusRequest}  from "./specialBus"


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            bus: Bus,
            outpass: Outpass,
            store: Store,
            ticket: Ticket,
            wallet: Wallet,
            schedule: updateSchedule,
            specialbus: specilBusRequest,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
