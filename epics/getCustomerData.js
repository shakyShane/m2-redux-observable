import {ajax} from 'rxjs/observable/dom/ajax';
import rx from 'rxjs';
import * as ActionTypes from '../ActionTypes';
import {receiveCustomerData, receiveCustomerDataError} from '../actions';

const dataUrl = `http://localhost:8090/rest/V1/customers/me`;

export default function getCustomerData(action$, store) {
    return action$.ofType(ActionTypes.REQUESTED_CUSTOMER_DATA)
        .map(action => {
            return action.payload
        })
        .switchMap(() => {
            const state = store.getState();
            const token = state.login.token;
            return ajax({
                url: dataUrl,
                crossDomain: true,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .map(resp => {
                return receiveCustomerData(resp.response);
            })
            .catch(e => {
                return rx.Observable.of(receiveCustomerDataError())
            })
        });
}

