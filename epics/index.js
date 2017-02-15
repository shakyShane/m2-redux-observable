import {combineEpics} from 'redux-observable';
import getCustomerData from './getCustomerData';
import token from './token';

export default combineEpics(
    token,
    getCustomerData
);
