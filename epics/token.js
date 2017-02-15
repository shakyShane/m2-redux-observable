import rx from 'rxjs';
import * as ActionTypes from '../ActionTypes';
import {receiveToken, tokenError} from '../actions';
import {ajaxService} from "../services/ajax";

const tokenUrl = `/rest/V1/integration/customer/token`;

export default function token(action$, store) {
    return action$.ofType(ActionTypes.TOKEN_FETCH)
        .switchMap(action =>
            ajaxService(store.getState())
                .postJSON(tokenUrl, action.payload.query)
                .delay(1000)
                .map(resp => {
                    return receiveToken(resp.response);
                })
                .catch(e => {
                    return rx.Observable.of(tokenError())
                })
        );
}

