import rx from 'rxjs';
import * as ActionTypes from '../ActionTypes';
import {customerDataFulfilled, customerDataError} from '../actions';
import {ajaxService} from "../services/ajax";

const dataUrl = `/rest/V1/customers/me`;

export default function getCustomerData(action$, store) {
    return action$.ofType(ActionTypes.CUSTOMER_DATA_FETCH)
        .switchMap(() => {
            return ajaxService(store.getState())
                .get(dataUrl)
                .delay(500)
                .map(resp => {
                    return customerDataFulfilled(resp.response);
                })
                .catch(e => {
                    return rx.Observable.of(customerDataError())
                })
        });
}

