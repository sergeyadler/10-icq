import {
    CHANGE_AVATAR,
    DECREMENT_FOLLOWERS,
    DECREMENT_FOLLOWING,
    INCREMENT_FOLLOWERS,
    INCREMENT_FOLLOWING
} from "../actions/icqActions.ts";
import type {IcqInterface} from "../utils/constants.ts";

export const icqReducer = (state: IcqInterface, action:any) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state,user:{...state.user,avatar:action.payload || state.user.avatar }  }

        case INCREMENT_FOLLOWERS:
            return {
                ...state,
                stats: { ...state.stats, followers: state.stats.followers + 1 },
            };
        case DECREMENT_FOLLOWERS:
            return {
                ...state,
                stats: {
                    ...state.stats,
                    followers: Math.max(0, state.stats.followers - 1),
                },
            };

        case INCREMENT_FOLLOWING:
            return {
                ...state,
                stats: { ...state.stats, following: state.stats.following + 1 },
            };
        case DECREMENT_FOLLOWING:
            return {
                ...state,
                stats: {
                    ...state.stats,
                    following: Math.max(0, state.stats.following - 1),
                },
            };


        default:
            return state;


    }
}