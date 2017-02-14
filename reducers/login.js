import * as ActionTypes from '../ActionTypes';

export default function login(state = {loading: false, token: '', customer: {}}, action) {
    console.log(action);
    switch (action.type) {
        case ActionTypes.REVOKE_TOKEN:
            return Object.assign({}, state, {error: false, token: '', customer: {}});
            break;
        case ActionTypes.REQUESTED_TOKEN:
            return Object.assign({}, state, {loading: true, error: false, token: ''});
            break;
        case ActionTypes.RECEIVED_TOKEN:
            return Object.assign({}, state, {
                loading: false,
                token: action.payload.token
            });
            break;
        case ActionTypes.RECEIVED_TOKEN_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: true
            });
            break;
        case ActionTypes.RECEIVED_CUSTOMER_DATA:
            return Object.assign({}, state, {
                loading: true,
                customer: action.payload
            });
            break;
    }
    return state;
}