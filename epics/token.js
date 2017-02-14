import {ajax} from 'rxjs/observable/dom/ajax';
import rx from 'rxjs';
import * as ActionTypes from '../ActionTypes';
import {receiveToken, tokenError} from '../actions';

const tokenUrl = `http://localhost:8090/rest/V1/integration/customer/token`;

export default function token(action$) {
    return action$.ofType(ActionTypes.REQUESTED_TOKEN)
        .map(action => {
            return action.payload
        })
        .switchMap(payload => {
            return ajax({
                url: tokenUrl,
                crossDomain: true,
                method: 'POST',
                body: payload.query,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            .map(resp => {
                return receiveToken(resp.response);
            })
            .catch(e => {
                return rx.Observable.of(tokenError())
            })
        });
}

