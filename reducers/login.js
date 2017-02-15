import * as ActionTypes from '../ActionTypes';

export default function login(state = {loading: false, token: '', customer: {}}, action) {
    switch (action.type) {
        case ActionTypes.TOKEN_REVOKE:
            return Object.assign({}, state, {
                error: false,
                token: '',
                customer: {}
            });
            break;

        case ActionTypes.TOKEN_FETCH:
            return Object.assign({}, state, {
                loading: true,
                error: false,
                token: ''
            });
            break;

        case ActionTypes.TOKEN_FULFILLED:
            return Object.assign({}, state, {
                loading: false,
                token: action.payload.token
            });
            break;

        case ActionTypes.TOKEN_FETCH_REJECTED:
            return Object.assign({}, state, {
                loading: false,
                error: true
            });
            break;

        case ActionTypes.CUSTOMER_DATA_FETCH:
            return Object.assign({}, state, {
                loading: true
            });
            break;

        case ActionTypes.CUSTOMER_DATA_FULFILLED:
            return Object.assign({}, state, {
                loading: false,
                customer: action.payload
            });
            break;

    }
    return state;
}
