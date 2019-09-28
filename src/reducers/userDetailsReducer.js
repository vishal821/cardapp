import { DETAILS_LOADING, DETAILS_LOADING_SUCCESS, DETAILS_LOADING_FAILURE } from "../actions/constants";
const initialState = {
    dataList: [],
    dataListSuccess: false,
}

export default function userDetailsReducer (state = initialState, action) {
    switch (action.type) {
        case DETAILS_LOADING:
        return {
            ...state,
            dataList: [],
            dataListSuccess: false
        }
        case DETAILS_LOADING_SUCCESS:
        return {
            ...state,
            dataListSuccess: true,
            dataList: action.payload
        }
        case DETAILS_LOADING_FAILURE:
        return {
            ...state,
            dataListSuccess: false,
            dataList: action.payload
        }
        default:
        return state;
    }
}
