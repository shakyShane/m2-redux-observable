import * as ActionTypes from '../ActionTypes';

export function login(query) {
  return {
    type: ActionTypes.TOKEN_FETCH,
    payload: {
      query
    }
  };
}

export function getCustomerData() {
    return {
        type: ActionTypes.CUSTOMER_DATA_FETCH
    };
}

export function customerDataFulfilled(payload) {
    return {
        type: ActionTypes.CUSTOMER_DATA_FULFILLED,
        payload: payload
    };
}

export function customerDataError() {
    return {
        type: ActionTypes.CUSTOMER_DATA_FETCH_ERROR
    };
}

export function searchUsers(query) {
  return {
    type: ActionTypes.SEARCHED_USERS,
    payload: {
      query
    }
  };
}

export function receiveUsers(users) {
  return {
    type: ActionTypes.RECEIVED_USERS,
    payload: {
      users
    }
  };
}

export function receiveToken(token) {
  return {
    type: ActionTypes.TOKEN_FULFILLED,
    payload: {
      token
    }
  };
}

export function revokeToken(token) {
  return {
    type: ActionTypes.TOKEN_REVOKE
  };
}

export function tokenError() {
  return {
    type: ActionTypes.TOKEN_FETCH_REJECTED
  };
}

export function clearSearchResults() {
  return {
    type: ActionTypes.CLEARED_SEARCH_RESULTS
  };
}

export function requestReposByUser(user) {
  return {
    type: ActionTypes.REQUESTED_USER_REPOS,
    payload: {
      user
    }
  };
}

export function receiveUserRepos(user, repos) {
  return {
    type: ActionTypes.RECEIVED_USER_REPOS,
    payload: {
      user,
      repos
    }
  };
}

export function checkAdminAccess() {
  return {
    type: ActionTypes.CHECKED_ADMIN_ACCESS
  };
}

export function accessDenied() {
  return {
    type: ActionTypes.ACCESS_DENIED
  };
}
