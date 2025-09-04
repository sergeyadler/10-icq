import type {IcqInterface} from "../utils/constants.ts";
import {legacy_createStore as createStore} from "redux";
import {icqReducer} from "../reducers/icqReducer.ts";

const initialState: IcqInterface = {
    user: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/7777?robohash'
    },
    stats: {
        followers: 0,
        following: 0
    }
};

export const store = createStore(icqReducer, initialState)