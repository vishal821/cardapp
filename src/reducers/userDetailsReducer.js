import { DETAILS_LOADING, DETAILS_LOADING_SUCCESS, DETAILS_LOADING_FAILURE,GALLERY_LOADING, GALLERY_LOADING_SUCCESS, GALLERY_LOADING_FAILURE } from "../actions/constants";
const initialState = {
    dataList: [],
    dataListSuccess: false,
    galleryList: [],
    galleryListSuccess: false,
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
        case GALLERY_LOADING:
        return {
            ...state,
            galleryList: [],
            galleryListSuccess: false
        }
        case GALLERY_LOADING_SUCCESS:
        return {
            ...state,
            galleryListSuccess: true,
            galleryList: action.payload
        }
        case GALLERY_LOADING_FAILURE:
        return {
            ...state,
            galleryListSuccess: false,
            galleryList: action.payload
        }
        default:
        return state;
    }
}
