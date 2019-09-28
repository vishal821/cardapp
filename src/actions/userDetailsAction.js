import axios from "axios";
import { DETAILS_LOADING, DETAILS_LOADING_SUCCESS, DETAILS_LOADING_FAILURE } from "../actions/constants";

export function detailsloading() {
    return {
        type: DETAILS_LOADING,
    };
}
export function detailssuccess(payload) {
    return {
        type: DETAILS_LOADING_SUCCESS,
        payload: payload
    };
}

export function detailsfailure(payload) {
    return {
        type: DETAILS_LOADING_FAILURE,
        payload: payload
    };
}

export function getdetailslist() {
    return (dispatch) => {
        dispatch(detailsloading());
        axios({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
        }).then((res) => {
            if (res.status === 200) {
                dispatch(detailssuccess(res.data));
            }
        }).catch((error) => {
            console.log(err);
        });
    };
}
