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


export const submitActionBegin = () => ({
    type: actionTypes.SUBMIT_ITEM
});

export const submitActionSuccess = (items) => ({
    type: actionTypes.SUBMIT_ITEM_SUCCESS
});

export const submitActionFailure = (error) => ({
    type: actionTypes.SUBMIT_ITEM_FAILURE
});

export function submitItem(formData) {
    console.log(formData);
    return (dispatch) => {
        const url = requestConfig.host + requestConfig.submitEndpoint;
        const body = {
            price: formData.price,
            path_url: formData.path_url,
            brand_name: formData.brand_name,
            item_name: formData.item_name,
            item_image: formData.item_image,
            expire_at: formData.expire_at,
            description: formData.description
        };
        dispatch(fetchItemsBegin());
        axios.post(url, body).then((response) => {
            console.log(response.data);
            dispatch(fetchItemsSuccess(response.data));
        }).catch((error) => {
            dispatch(fetchItemsFailure())
        });
    }
}