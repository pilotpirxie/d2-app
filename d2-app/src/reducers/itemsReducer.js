import * as actionTypes from '../constants/actionTypes';

const initialState = {
    isWorking: false,
    error: '',
    items: []
};

export default function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_ITEM_LIST:
            return {...state, isWorking: true};
        case actionTypes.FETCH_ITEM_LIST_SUCCESS:
            return {...state, isWorking: false, items: [...action.payload], error: false};
        case actionTypes.FETCH_ITEM_LIST_FAILURE:
            return {...state, isWorking: false, error: true};
        default:
            return state;
    }
}