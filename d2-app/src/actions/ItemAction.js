import * as actionTypes from '../constants/actionTypes';
import requestConfig from '../config/requestConfig';
import axios from 'axios';

export const fetchItemsBegin = () => ({
    type: actionTypes.FETCH_ITEM_LIST
});

export const fetchItemsSuccess = (items) => ({
    type: actionTypes.FETCH_ITEM_LIST_SUCCESS,
    payload: items
});

export const fetchItemsFailure = (error) => ({
    type: actionTypes.FETCH_ITEM_LIST_FAILURE
});

export function fetchItems() {
    return (dispatch) => {
        const url = requestConfig.host + requestConfig.fetchAllEndpoint;
        dispatch(fetchItemsBegin());
        axios.get(url).then((response) => {
            console.log(response.data);
            dispatch(fetchItemsSuccess(response.data));
        }).catch((error) => {
            dispatch(fetchItemsFailure())
        });
    }
}