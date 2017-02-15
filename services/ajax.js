import {ajax} from 'rxjs/observable/dom/ajax';

/**
 * Todo retrieve from ENV var
 * @type {string}
 */
const domain = `http://localhost:8090`;

/**
 * Factory that returns stateful methods
 * @param state
 * @returns {*}
 */
export function ajaxService (state) {
    return {
        postJSON(path, data) {
            return ajax({
                url: getUrl(path),
                crossDomain: true,
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
        },
        get(path) {
            const headers = getAuthHeaders(state);
            return ajax({
                url: getUrl(path),
                headers,
                crossDomain: true,
                method: 'GET'
            })
        }
    }
}

/**
 * If the user currently has an Auth Token assigned, append
 * the correct header
 * @param state
 * @returns {*}
 */
function getAuthHeaders (state) {
    const token = state.login.token;
    if (token) {
        return  {
            'Authorization': `Bearer ${token}`
        }
    }
    return {};
}

/**
 * @param path
 * @returns {string}
 */
function getUrl (path) {
    return `${domain}${path}`;
}
