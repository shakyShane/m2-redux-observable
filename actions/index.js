import * as ActionTypes from '../ActionTypes';

export function login(query) {
  return {
    type: ActionTypes.REQUESTED_TOKEN,
    payload: {
      query
    }
  };
}

export function getCustomerData() {
    return {
        type: ActionTypes.REQUESTED_CUSTOMER_DATA
    };
}

export function receiveCustomerData(payload) {
    return {
        type: ActionTypes.RECEIVED_CUSTOMER_DATA,
        payload: payload
    };
}

export function receiveCustomerDataError() {
    return {
        type: ActionTypes.RECEIVED_CUSTOMER_DATA_ERROR
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
    type: ActionTypes.RECEIVED_TOKEN,
    payload: {
      token
    }
  };
}

export function revokeToken(token) {
  return {
    type: ActionTypes.REVOKE_TOKEN
  };
}

export function tokenError() {
  return {
    type: ActionTypes.RECEIVED_TOKEN_ERROR
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
