import {combineEpics} from 'redux-observable';
import searchUsers from './searchUsers';
import clearSearchResults from './clearSearchResults';
import fetchReposByUser from './fetchReposByUser';
import getCustomerData from './getCustomerData';
import adminAccess from './adminAccess';
import token from './token';

export default combineEpics(
    searchUsers,
    clearSearchResults,
    fetchReposByUser,
    adminAccess,
    token,
    getCustomerData
);
