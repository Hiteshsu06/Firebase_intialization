import { ActionTypes } from "../contants/Action-type";
export const ADD = (data) => {
    return {
        type: ActionTypes.ADD_CART,
        payload: data
    }
};
export const INC = (id) => {
    return {
        type: ActionTypes.INCREMENT,
        payload: id
    }
};
export const DEC = (id) => {
    return {
        type: ActionTypes.DECREMENT,
        payload: id
    }
};
export const DEL = (id) => {
    return {
        type: ActionTypes.DELETE,
        payload: id
    }
};

export const FETCHDATA = (array) => {
    return {
        type: ActionTypes.FETCH_DATA,
        payload: array
    }
};

export const SWAP = (id) => {
    return {
        type: ActionTypes.ADD_DELETE_STATUS,
        payload: id
    }
};

export const SWAP2 = (id) => {
    return {
        type: ActionTypes.ADD_DELETE_STATUS_POST,
        payload: id
    }
};